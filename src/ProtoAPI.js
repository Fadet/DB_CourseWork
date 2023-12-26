import * as product_grpc from './proto/proto/v1/product_pb';
import * as product_grpc_web from './proto/proto/v1/product_grpc_web_pb';
import * as category_grpc from './proto/proto/v1/category_pb';
import * as category_grpc_web from './proto/proto/v1/category_grpc_web_pb';
import * as authorization_grpc from './proto/proto/v1/authorization_pb';
import * as authorization_grpc_web from './proto/proto/v1/authorization_grpc_web_pb';
import * as order_grpc from './proto/proto/v1/order_pb';
import * as order_grpc_web from './proto/proto/v1/order_grpc_web_pb';
import {Empty} from "google-protobuf/google/protobuf/empty_pb"

const empty = new Empty();
const hostname = 'http://localhost:8000'; // Proxy server

export async function getCategories() {
    const client = new category_grpc_web.CategoryPromiseClient(hostname);
    const response = await client.getAll(empty,{});
    return response.toObject();
}

export async function getCategory(option) {
    const filter = new category_grpc.CategoryGetRequest.Filter();
    if (option['categoryId']) {
        filter.setCategoryId(option['categoryId']);
    }
    else if (option['nameen']) {
        filter.setNameen(option['nameen']);
    }
    else
        throw new Error("Parameter missing: categoryId or nameen required");

    const request = new category_grpc.CategoryGetRequest();
    request.setFilter(filter);

    const client = new category_grpc_web.CategoryPromiseClient(hostname);
    const response = await client.get(request,{});
    return response.toObject();
}

export async function getProducts(paginationProps, categoryOption) {
    const filter = new product_grpc.ProductGetAllRequest.Filter();
    const pagination = new product_grpc.ProductGetAllRequest.Filter.Pagination();
    if (paginationProps !== null) {
        if (paginationProps['offset'] && paginationProps['count']) {
            pagination.setCount(paginationProps['count']);
            pagination.setOffset(paginationProps['offset']);
        }
        else throw new Error("Some parameters missing: offset and count required");
        filter.setPagination(pagination);
    }

    if (categoryOption !== null) {
        if (categoryOption['categoryId']) {
            filter.setCategoryId(categoryOption['categoryId']);
        }
        else if (categoryOption['nameen']) {
            filter.setNameen(categoryOption['nameen']);
        }
        else
            throw new Error("Parameter missing: categoryId or nameen required");
    }

    const request = new product_grpc.ProductGetAllRequest();
    request.setFilter(filter);

    const client = new product_grpc_web.ProductPromiseClient(hostname);
    const response = await client.getAll(request,{});
    return response.toObject();
}

export async function getProduct(id) {
    const request = new product_grpc.ProductGetRequest();
    request.setId(id);

    const client = new product_grpc_web.ProductPromiseClient(hostname);
    const response = await client.get(request,{});
    return response.toObject();
}

export async function getLoginData(login, password) {
    const request = new authorization_grpc.LoginRequest();
    request.setLogin(login);
    request.setPassword(password);

    const client = new authorization_grpc_web.AuthorizationPromiseClient(hostname);
    const respose = await client.login(request, {});

    return respose.toObject();
}

export async function doRegister(email, phoneNumber, password) {
    const userData = new authorization_grpc.RegisterRequest.UserInfo();
    userData.setLogin("undefined");
    userData.setEmail(email);
    userData.setPassword(password);
    userData.setPhoneNumber(phoneNumber);

    const request = new authorization_grpc.RegisterRequest();
    request.setUser(userData);

    const client = new authorization_grpc_web.AuthorizationPromiseClient(hostname);
    const response = await client.register(request, {});

    return response.toObject();
}

export async function sendOrder(products) {
    const data = products.map(product => {
        const elem = new order_grpc.ProductOrder();
        elem.setId(product.id);
        elem.setCount(product.count);
        return elem;
    });

    const request = new order_grpc.PlaceRequest();
    request.setProductsList(data);

    const client = new order_grpc_web.OrderPromiseClient(hostname);
    const responce = await client.place(request, {});

    return responce.toObject();
}

export async function getOrderStatus(id) {
    const request = new order_grpc.OrderStatusRequest();
    request.setId(id);

    const client = new order_grpc_web.OrderPromiseClient(hostname);
    const responce = await client.getOrderStatus(request, {});

    return responce.toObject();
}