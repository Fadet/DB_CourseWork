
�
google/protobuf/empty.protogoogle.protobuf"
EmptyBv
com.google.protobufB
EmptyProtoPZ'github.com/golang/protobuf/ptypes/empty��GPB�Google.Protobuf.WellKnownTypesJ�
 3
�
 2� Protocol Buffers - Google's data interchange format
 Copyright 2008 Google Inc.  All rights reserved.
 https://developers.google.com/protocol-buffers/

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

     * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
     * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following disclaimer
 in the documentation and/or other materials provided with the
 distribution.
     * Neither the name of Google Inc. nor the names of its
 contributors may be used to endorse or promote products derived from
 this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


  

" ;
	
%" ;

# >
	
# >

$ ,
	
$ ,

% +
	
% +

& "
	

& "

' !
	
$' !

( 
	
( 
�
 3 � A generic empty message that you can re-use to avoid defining duplicated
 empty messages in your APIs. A typical example is to use it as the request
 or the response type of an API method. For instance:

     service Foo {
       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
     }

 The JSON representation for `Empty` is empty JSON object `{}`.



 3bproto3
�
proto/v1/authorization.protoauthorization.v1google/protobuf/empty.proto"�
RegisterRequest>
user (2*.authorization.v1.RegisterRequest.UserInfoRuseru
UserInfo
login (	Rlogin
email (	Remail
password (	Rpassword!
phone_number (	RphoneNumber",
RegisterResponce
message (	Rmessage"@
LoginRequest
login (	Rlogin
password (	Rpassword"�
LoginResponce
token (	Rtoken
lifetime (Rlifetime8
user (2$.authorization.v1.LoginResponce.UserRuser?
User
email (	Remail!
phone_number (	RphoneNumberJ2�
AuthorizationQ
Register!.authorization.v1.RegisterRequest".authorization.v1.RegisterResponceH
Login.authorization.v1.LoginRequest.authorization.v1.LoginResponceJ�	
  .

  
A
 27option csharp_namespace = "Draught_Drinks_Store_GRPC";

	
  %


  


 

  	<

  	

  	

  	*:

 
3

 


 


 
$1


  


 

  	

  

   !

   

   

    

  !

  

  

   

  $

  

  

  "#

  (

  

  #

  &'

  

  

  

  


 




 

 

 

 


 




 

 

 

 










! .


!

 "

 "

 "

 "

#

#

#

#

&

&

&

&

 (+	

 (

  )!

  )

  )

  ) 

 *(

 *

 *#

 *&'

	-" refresh token


	 -

	 -

	 -bproto3