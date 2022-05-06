(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{486:function(t,e,s){"use strict";s.r(e);var a=s(28),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"_01-初认next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01-初认next"}},[t._v("#")]),t._v(" 01. 初认Next")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm i -g @nestjs/cli\n$ nest new my-first-nest-project\n")])])]),s("p",[t._v("目录中包含几个核心文件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("src\n ├── app.controller.spec.ts // 对于基本控制器的单元测试样例\n ├── app.controller.ts // 带有单个路由的基本控制器示例。\n ├── app.module.ts // 应用程序的根模块。\n ├── app.service.ts // 带有单个方法的基本服务\n └── main.ts // 应用程序入口文件。它使用 NestFactory 用来创建 Nest 应用实例。\n")])])]),s("h3",{attrs:{id:"_02-controllers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_02-controllers"}},[t._v("#")]),t._v(" 02. Controllers")]),t._v(" "),s("p",[t._v("控制器负责处理传入的请求并将响应返回给客户端")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/nest/controller.png",alt:""}})]),t._v(" "),s("p",[t._v("控制器的目的是接收应用程序的特定请求。 "),s("code",[t._v("路由")]),t._v("机制控制哪个控制器接收哪个请求。 很多时候，每个控制器都有多个路由，不同的路由可以执行不同的操作。")]),t._v(" "),s("p",[t._v("为了创建一个基本的控制器，我们使用类和"),s("code",[t._v("装饰器")]),t._v("。 装饰器将类与所需的元数据相关联，并使 Nest 能够创建路由映射（将请求绑定到相应的控制器）。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("为了快速创建带有内置验证的控制器，我们可以使用 CLI 的 命名：nest generate controller [name] 也可以使用 nest g co [name]。\n支持"),s("code",[t._v("\\")]),t._v("划分文件夹。\n比如我们想把某个控制器放在 src/module目录的wsh文件夹下，\n可以使用：\n"),s("code",[t._v("nest g co module/wsh")])]),t._v(" "),s("p",[t._v("应用程序的根模块会自定引入该控制器。\n不想要生成对应的测试文件可以追加 --no-spec")])]),t._v(" "),s("h4",{attrs:{id:"路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),s("p",[t._v("在下面的例子中，我们使用 @Controller() 装饰器定义一个基本的控制器。可选 路由路径前缀设置为 cats。在 @Controller() 装饰器中使用路径前缀可以使我们轻松地对一组相关的路由进行分组，并最大程度地减少重复代码。例如，我们可以选择将一组用于管理与 /customers 下的客户实体进行互动的路由进行分组。这样，我们可以在 @Controller() 装饰器中指定路径前缀 customers，这样就不必为文件中的每个路由重复路径的那部分。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import { Controller, Get } from '@nestjs/common';\n\n@Controller('cats')\nexport class CatsController {\n  @Get()\n  findAll(): string {\n    return 'This action returns all cats';\n  }\n}\n\n")])])]),s("p",[s("code",[t._v("findAll()")]),t._v(" 方法之前的 "),s("code",[t._v("@Get()")]),t._v(" HTTP 请求方法装饰器告诉 Nest 为 HTTP 请求的特定端点创建处理程序。端点对应于 HTTP 请求方法（在本例中为 GET ）和路由路径（如 GET /cats ）。")]),t._v(" "),s("p",[t._v("什么是路由路径 ？ 一个处理程序的路由路径是通过连接为控制器 （Controller） 声明的（可选）前缀和请求装饰器中指定的任何路径来确定的。由于我们已经为每个 route（cats） 声明了一个前缀，并且没有在装饰器中添加任何路由信息，因此 Nest 会将 GET /cats 请求映射到此处理程序。如上所述，该路径包括可选的控制由路径前缀和请求方法装饰器中声明的任何路径字符串。例如，路径前缀 customers 与装饰器 @Get('profile') 组合会为 GET /customers/profile 请求生成路由映射。")]),t._v(" "),s("ul",[s("li",[t._v("Nest 使用两种不同的操作响应选项的概念")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("标准（推荐）")]),t._v(" "),s("th",[t._v("使用这个内置方法，当请求处理程序返回一个 JavaScript 对象或数组时，它将自动序列化为 JSON。但是，当它返回一个 JavaScript 基本类型（例如string、number、boolean）时， Nest 将只发送值，而不尝试序列化它。这使响应处理变得简单：只需要返回值，其余的由 Nest 负责。")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("类库特有的")]),t._v(" "),s("td",[t._v("我们可以在函数签名处通过 @Res() 注入类库特定的响应对象（例如， Express）。使用此方法，你就能使用由该响应对象暴露的原生响应处理函数。例如，使用 Express，您可以使用 response.status(200).send() 构建响应")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("Nest 检测处理程序何时使用 "),s("code",[t._v("@Res()")]),t._v(" 或 "),s("code",[t._v("@Next()")]),t._v("，表明你选择了特定于库的选项。如果在一个处理函数上同时使用了这两个方法，那么此处的标准方式就是自动禁用此路由, 你将不会得到你想要的结果。如果需要在某个处理函数上同时使用这两种方法（例如，通过注入响应对象，单独设置 cookie / header，但把其余部分留给框架），你必须在装饰器 "),s("code",[t._v("@Res({ passthrough: true })")]),t._v("中将 "),s("code",[t._v("passthrough")]),t._v(" 选项设为 true")])]),t._v(" "),s("h4",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),s("p",[t._v("处理程序有时需要访问客户端的请求细节。Nest 提供了对底层平台（默认为 Express）的请求对象（request）的访问方式。我们可以在处理函数的签名中使用 "),s("code",[t._v("@Req()")]),t._v(" 装饰器，指示 Nest 将请求对象注入处理程序。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/* cats.controller.ts */\nimport { Controller, Get, Req } from '@nestjs/common';\nimport { Request } from 'express';\n@Controller('cats')\nexport class CatsController {\n  @Get()\n  findAll(@Req() request: Request): string {\n    return 'This action returns all cats';\n  }\n}\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("为了在 express 中使用 Typescript （如 request: Request 上面的参数示例所示），请安装 @types/express 。")])]),t._v(" "),s("p",[s("code",[t._v("Request")]),t._v("对象代表 HTTP 请求，并具有查询字符串，请求参数参数，HTTP 标头（HTTP header） 和 正文（HTTP body）的属性。在多数情况下，不必手动获取它们。 我们可以使用专用的装饰器，比如开箱即用的 "),s("code",[t._v("@Body()")]),t._v("或"),s("code",[t._v("@Query()")]),t._v("。 下面是 Nest 提供的装饰器及其代表的底层平台特定对象的对照列表。")]),t._v(" "),s("pre",[t._v("@Request(), @Req()\treq\n@Response(), @Res()*\tres\n@Next()\tnext\n@Session()\treq.session\n@Param(key?: string)\treq.params / req.params[key]\n@Body(key?: string)\treq.body / req.body[key]\n@Query(key?: string)\treq.query / req.query[key]\n@Headers(name?: string)\treq.headers / req.headers[name]\n@Ip()\treq.ip\n@HostParam()\treq.hosts\n")]),t._v(" "),s("p",[t._v("为了与底层 HTTP 平台（例如，Express 和 Fastify）之间的类型兼容， Nest 提供了 @Res()和 @Response() 装饰器。@Res() 只是 @Response() 的别名。两者都直接暴露了底层平台的 response 对象接口。在使用它们时，还应该导入底层库的类型声明（如：@types/express）以充分利用它们。需要注意的是，在请求处理函数中注入 @Res()或 @Response() 时，会将 Nest 置于该处理函数的特定于库（Library-specific mode）的模式下，并负责管理响应。这样做时，必须通过调用 response 对象（例如，res.json(…) 或 res.send(…)）发出某种响应，否则 HTTP 服务器将挂起。")]),t._v(" "),s("h4",{attrs:{id:"资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源"}},[t._v("#")]),t._v(" 资源")]),t._v(" "),s("h4",{attrs:{id:"post-请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post-请求"}},[t._v("#")]),t._v(" POST 请求")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import { Controller, Get, Post } from '@nestjs/common';\n@Controller('cats')\nexport class CatsController {\n  @Post()\n  create(): string {\n    return 'This action adds a new cat';\n  }\n  @Get()\n  findAll(): string {\n    return 'This action returns all cats';\n  }\n}\n")])])]),s("p",[t._v("Nest 为所有标准的 HTTP 方法提供了相应的装饰器："),s("code",[t._v("@Put()、@Delete()、@Patch()、@Options()、以及 @Head()")]),t._v("。此外，"),s("code",[t._v("@All()")]),t._v(" 则用于定义一个用于处理所有 HTTP 请求方法的处理程序。")]),t._v(" "),s("h4",{attrs:{id:"路由通配符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由通配符"}},[t._v("#")]),t._v(" 路由通配符")]),t._v(" "),s("p",[t._v("支持模式匹配。例如，星号被用作通配符，将匹配任何字符组合。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@Get('ab*cd')\nfindAll() {\n  return 'This route uses a wildcard';\n}\n")])])]),s("p",[t._v("路由路径 'ab*cd' 将匹配 abcd 、ab_cd 、abecd 等。字符 ? 、+ 、 * 以及 () 是它们的正则表达式对应项的子集。连字符（-） 和点（.）按字符串路径逐字解析.")]),t._v(" "),s("h4",{attrs:{id:"状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),s("p",[t._v("如前所述，默认情况下响应状态代码始终为 "),s("code",[t._v("200")]),t._v("，除了 "),s("code",[t._v("201")]),t._v(" 的 POST 请求。我们可以通过在处理程序级别添加 @HttpCode(...) 装饰器轻松更改此行为。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@Post()\n@HttpCode(204)\ncreate() {\n  return 'This action adds a new cat';\n}\n")])])]),s("p",[t._v("通常，状态码不是固定的，而是取决于各种因素。在这种情况下，您可以使用类库特有（library-specific）的 response （通过@Res()注入 ）对象（或者在出现错误时，抛出异常）。")]),t._v(" "),s("h4",{attrs:{id:"headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[t._v("#")]),t._v(" Headers")]),t._v(" "),s("p",[t._v("要指定自定义响应标头，可以使用 "),s("code",[t._v("@Header()")]),t._v(" 装饰器或特定于库的响应对象（并直接调用 res.header() ）。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@Post()\n@Header('Cache-Control', 'none')\ncreate() {\n  return 'This action adds a new cat';\n}\n")])])]),s("h4",{attrs:{id:"重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重定向"}},[t._v("#")]),t._v(" 重定向")]),t._v(" "),s("p",[t._v("要将响应重定向到特定 URL，可以使用 "),s("code",[t._v("@Redirect()")]),t._v(" 装饰器或特定于库的响应对象（并直接调用 "),s("code",[t._v("res.redirect()")]),t._v(" ）。")]),t._v(" "),s("p",[s("code",[t._v("@Redirect()")]),t._v(" 接受一个必需的 url 参数和一个可选的 statusCode 参数。 如果省略，statusCode 默认为 302。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  @Get('redirect')\n  @Redirect('https://www.baidu.com', 301)\n")])])]),s("p",[t._v("有时可能希望动态确定 HTTP 状态代码或重定向 URL。 通过从以下的路由处理方法返回一个对象来做到这一点：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n  "url": string,\n  "statusCode": number\n}\n')])])]),s("p",[t._v("返回的值将覆盖传递给 @Redirect()装饰器的所有参数。 例如")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@Get('docs')\n@Redirect('https://www.baidu.com', 302)\ngetDocs(@Query('type') type) {\n  if (type === 'news') {\n    return { url: 'http://news.baidu.com/' };\n  }\n}\n")])])]),s("h4",{attrs:{id:"路由参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由参数"}},[t._v("#")]),t._v(" 路由参数")]),t._v(" "),s("p",[t._v("当需要接受动态数据作为请求的一部分时（例如，使用GET /cats/1 来获取 id 为 1 的 cat），带有静态路径的路由将无法工作。为了定义带参数的路由，我们可以在路由路径中添加路由参数标记以捕获请求 URL 中该位置的动态值。下面的 @Get() 装饰器示例中的路由参数标记演示了此用法。以这种方式声明的路由参数可以使用 @Param() 装饰器访问，该装饰器应添加到函数签名中。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@Get(':id')\nfindOne(@Param() params): string {\n  console.log(params.id);\n  return `This action returns a #${params.id} cat`;\n}\n")])])]),s("p",[t._v("@Param() 用于修饰一个方法的参数（上面示例中的 params），并在该方法内将路由参数作为被修饰的方法参数的属性。如上面的代码所示，我们可以通过引用 params.id来访问（路由路径中的） id 参数。 您还可以将特定的参数标记传递给装饰器，然后在方法主体中按参数名称直接引用路由参数。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@Get(':id')\nfindOne(@Param('id') id: string): string {\n  return `This action returns a #${id} cat`;\n}\n")])])]),s("h4",{attrs:{id:"子域路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子域路由"}},[t._v("#")]),t._v(" 子域路由")]),t._v(" "),s("p",[t._v("@Controller 装饰器可以接受一个 host 选项，以要求传入请求的 HTTP 主机匹配某个特定值。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@Controller({ host: 'admin.example.com' })\nexport class AdminController {\n  @Get()\n  index(): string {\n    return 'Admin page';\n  }\n}\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("由于 Fastify 缺乏对嵌套路由器的支持，因此当使用子域路由时，应该改用（默认） Express 适配器（Express adapter）。")])]),t._v(" "),s("p",[t._v("与路由路径类似，hosts 选项可以使用标记来捕获主机名中该位置的动态值。下面的 @Controller() 装饰器示例中的主机参数标记演示了这种用法。可以使用 @HostParam() 装饰器访问以这种方式声明的主机参数，该装饰器应添加到方法签名中。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@Controller({ host: ':account.example.com' })\nexport class AccountController {\n  @Get()\n  getInfo(@HostParam('account') account: string) {\n    return account;\n}\n")])])]),s("h4",{attrs:{id:"作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[t._v("#")]),t._v(" 作用域")]),t._v(" "),s("p",[t._v("对于来自不同编程语言背景的人来说，在 Nest 中得知几乎所有内容都是在传入请求之间共享的，这可能是出乎意料的。我们有一个到数据库的连接池、具有全局状态的单例服务等。请记住，Node.js 不遵循请求/响应多线程无状态模型，其中每个请求都由单独的线程处理。因此，使用单例实例对我们的应用程序来说是完全安全的。")]),t._v(" "),s("h4",{attrs:{id:"异步性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步性"}},[t._v("#")]),t._v(" 异步性")]),t._v(" "),s("p",[t._v("每个异步函数都必须返回一个 Promise。这意味着可以返回 Nest 能够自行解析的延迟值。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@Get()\nasync findAll(): Promise<any[]> {\n  return [];\n}\n")])])]),s("p",[t._v("这是完全有效的。此外，通过返回 RxJS observable 流，Nest 路由处理程序将更加强大。 Nest 将自动订阅下面的源并获取最后发出的值（在流完成后）。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@Get()\nfindAll(): Observable<any[]> {\n  return of([]);\n}\n")])])]),s("h4",{attrs:{id:"请求负载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求负载"}},[t._v("#")]),t._v(" 请求负载")]),t._v(" "),s("p",[t._v("如果使用 TypeScript，我们需要确定 DTO（数据传输对象）模式。"),s("code",[t._v("DTO")]),t._v(" 是一个定义数据如何通过网络发送的对象。我们可以使用 TypeScript 接口或简单的类来确定 DTO 模式。有趣的是，我们建议在这里使用类。为什么？类是 JavaScript ES6 标准的一部分，因此它们在编译后的 JavaScript 中被保留为真实实体。另一方面，由于 TypeScript 接口在转译过程中被移除，Nest 无法在运行时引用它们。这很重要，因为 Pipes 等功能在运行时可以访问变量的元类型时提供了额外的可能性。")]),t._v(" "),s("p",[t._v("创建 CreateCatDto 类：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export class CreateCatDto {\n  readonly name: string;\n  readonly age: number;\n  readonly breed: string;\n}\n")])])]),s("h4",{attrs:{id:"处理错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#处理错误"}},[t._v("#")]),t._v(" 处理错误")]),t._v(" "),s("p",[t._v("该示例利用几个可用的装饰器来创建基本控制器。 该控制器暴露了几个访问和操作内部数据的方法。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';\nimport { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';\n@Controller('cats')\nexport class CatsController {\n  @Post()\n  create(@Body() createCatDto: CreateCatDto) {\n    return 'This action adds a new cat';\n  }\n  @Get()\n  findAll(@Query() query: ListAllEntities) {\n    return `This action returns all cats (limit: ${query.limit} items)`;\n  }\n  @Get(':id')\n  findOne(@Param('id') id: string) {\n    return `This action returns a #${id} cat`;\n  }\n  @Put(':id')\n  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {\n    return `This action updates a #${id} cat`;\n  }\n  @Delete(':id')\n  remove(@Param('id') id: string) {\n    return `This action removes a #${id} cat`;\n  }\n}\n")])])]),s("h4",{attrs:{id:"准备运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备运行"}},[t._v("#")]),t._v(" 准备运行")]),t._v(" "),s("p",[t._v("控制器已经准备就绪，可以使用，但是 Nest 依然不知道 "),s("code",[t._v("CatsController")]),t._v(" 是否存在，所以它不会创建这个类的一个实例。")]),t._v(" "),s("p",[t._v("控制器总是属于模块，这就是为什么我们在 "),s("code",[t._v("@Module()")]),t._v(" 装饰器中包含 controllers 数组的原因。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/* app.module.ts */\nimport { Module } from '@nestjs/common';\nimport { CatsController } from './cats/cats.controller';\n@Module({\n  controllers: [CatsController],\n})\nexport class AppModule {}\n\n")])])]),s("p",[t._v("我们使用 "),s("code",[t._v("@Module()")]),t._v(" 装饰器将元数据附加到模块类中，现在，Nest 可以轻松反射出哪些控制器（controller）必须被使用。")]),t._v(" "),s("h4",{attrs:{id:"类库特有方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类库特有方式"}},[t._v("#")]),t._v(" 类库特有方式")]),t._v(" "),s("p",[t._v("到目前为止，我们已经讨论了 Nest 操作响应的标准方式。操作响应的第二种方法是使用类库特有的响应对象(Response)。为了注入特定的响应对象，我们需要使用 @Res() 装饰器。为了对比差异，让我们来重写 CatsController：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/* cats.controller.ts */\nimport { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';\nimport { Response } from 'express';\n@Controller('cats')\nexport class CatsController {\n  @Post()\n  create(@Res() res: Response) {\n    res.status(HttpStatus.CREATED).send();\n  }\n  @Get()\n  findAll(@Res() res: Response) {\n    res.status(HttpStatus.OK).json([]);\n  }\n}\n")])])]),s("p",[t._v("尽管此方法有效，并且实际上通过提供对响应对象的完全控制（标头操作，特定于库的功能等）在某些方面提供了更大的灵活性，但应谨慎使用此种方法。通常来说，这种方式非常不清晰，并且有一些缺点。 主要的缺点是你的代码变得依赖于平台（因为不同的底层库在响应对象（Response）上可能具有不同的 API），并且更加难以测试（必须模拟响应对象等）。")]),t._v(" "),s("p",[t._v("而且，在上面的示例中，失去与依赖于 Nest 标准响应处理的 Nest 功能（例如，"),s("code",[t._v("拦截器（Interceptors）")]),t._v(" 和 "),s("code",[t._v("@HttpCode()/@Header() 装饰器）")]),t._v("的兼容性。要解决此问题，可以将 passthrough 选项设置为 true，如下所示：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@Get()\nfindAll(@Res({ passthrough: true }) res: Response) {\n  res.status(HttpStatus.OK);\n  return [];\n}\n")])])]),s("p",[t._v("现在，就能与底层框架原生的响应对象（Response）进行交互（例如，根据特定条件设置 Cookie 或 HTTP 头），并将剩余的部分留给 Nest 处理。")])])}),[],!1,null,null,null);e.default=r.exports}}]);