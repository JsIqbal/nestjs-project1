nest generate controller messages/messages --flat : create me a messages controller in the messages directory without the controller folder.

we will create the initial controller and rest client

in nest js there are class decorators, method decorators and argument decorators

class decorator: @Controller()
method decorator: @Get()
argument decorator: @Post(@Body() body: any) -> This will take the body from the request and provide it in the body parameter.
validation pipe that validates request before it can go in the controller.

install: class-validator and class-transformer
DTO initialization for create message.
we always create repository first and services later in nestjs.
service will never create its own dependency

flow: repo -> service -> controller