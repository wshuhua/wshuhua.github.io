(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{502:function(t,a,s){"use strict";s.r(a);var v=s(28),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-宏观视角下的浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-宏观视角下的浏览器"}},[t._v("#")]),t._v(" 1. 宏观视角下的浏览器")]),t._v(" "),s("h3",{attrs:{id:"_1-1-chrome架构演变史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-chrome架构演变史"}},[t._v("#")]),t._v(" 1.1 Chrome架构演变史")]),t._v(" "),s("h4",{attrs:{id:"单进程浏览器时代"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单进程浏览器时代"}},[t._v("#")]),t._v(" 单进程浏览器时代：")]),t._v(" "),s("p",[t._v("单进程浏览器是指浏览器的所有功能模块都是运行在同一个进程里，这些模块包含了网络、插件、JavaScript 运行环境、渲染引擎和页面等")]),t._v(" "),s("p",[t._v("如此多的功能模块运行在一个进程里，导致单进程浏览器不稳定、不流畅和不安全的一个主要因素。")]),t._v(" "),s("ul",[s("li",[t._v("不稳定")])]),t._v(" "),s("p",[t._v("早期浏览器需要借助于插件来实现诸如 Web 视频、Web 游戏等各种强大的功能，但是插件是最容易出问题的模块，并且还运行在浏览器进程之中，所以一个插件的意外崩溃会引起整个浏览器的崩溃。")]),t._v(" "),s("p",[t._v("除了插件之外，渲染引擎模块也是不稳定的，通常一些复杂的 JavaScript 代码就有可能引起渲染引擎模块的崩溃。和插件一样，渲染引擎的崩溃也会导致整个浏览器的崩溃。")]),t._v(" "),s("ul",[s("li",[t._v("不流畅")])]),t._v(" "),s("p",[t._v("所有页面的渲染模块、JavaScript 执行环境以及插件都是运行在同一个线程中的，这就意味着同一时刻只能有一个模块可以执行。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("freeze")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"freeze"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("freeze")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("如果让这个脚本运行在一个单进程浏览器的页面里 会导致什么？")]),t._v(" "),s("p",[t._v("因为浏览器中所有的页面都运行在该线程中，所以这些页面都没有机会去执行任务，这样就会导致整个浏览器失去响应，变卡顿。")]),t._v(" "),s("p",[t._v("除了上述脚本或者插件会让单进程浏览器变卡顿外，页面的内存泄漏也是单进程变慢的一个重要原因。通常浏览器的内核都是非常复杂的，运行一个复杂点的页面再关闭页面，会存在内存不能完全回收的情况，这样导致的问题是使用时间越长，内存占用越高，浏览器会变得越慢。")]),t._v(" "),s("ul",[s("li",[t._v("不安全")])]),t._v(" "),s("p",[t._v("插件可以使用 C/C++ 等代码编写，通过插件可以获取到操作系统的任意资源，当你在页面运行一个插件时也就意味着这个插件能完全操作你的电脑。如果是个恶意插件，那么它就可以释放病毒、窃取你的账号密码，引发安全性问题。至于页面脚本，它可以通过浏览器的漏洞来获取系统权限，这些脚本获取系统权限之后也可以对你的电脑做一些恶意的事情，同样也会引发安全问题。")]),t._v(" "),s("h4",{attrs:{id:"多进程浏览器时代"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多进程浏览器时代"}},[t._v("#")]),t._v(" 多进程浏览器时代")]),t._v(" "),s("p",[t._v("早期多进程架构：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/js/chrome1.png",alt:""}})]),t._v(" "),s("p",[t._v("Chrome早期多进程架构，由插件进程、渲染进程和主进程组成，进程之间由 IPC进行通信")]),t._v(" "),s("ul",[s("li",[t._v("由于进程是相互隔离的，所以当一个页面或者插件崩溃时，影响到的仅仅是当前的页面进程或者插件进程，并不会影响到浏览器和其他页面，这就解决了页面或者插件的崩溃会导致整个浏览器崩溃。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("多进程架构也会出现一个页面崩溃影响到其他页面的情况")]),t._v(" "),s("p",[t._v('通常情况下是一个页面使用一个进程，但是，有一种情况，叫"同一站点(same-site)"。')]),t._v(" "),s("p",[t._v("具体地讲，我们将“同一站点”定义为根域名（例如，geekbang.org）加上协议（例如，https:// 或者http://），还包含了该根域名下的所有子域名和不同的端口，比如下面这三个：")]),t._v(" "),s("ul",[s("li",[t._v("https://time.geekbang.org")]),t._v(" "),s("li",[t._v("https://www.geekbang.org")]),t._v(" "),s("li",[t._v("https://www.geekbang.org:8080")])]),t._v(" "),s("p",[t._v("都是属于同一站点，因为它们的协议都是https，而根域名也都是geekbang.org。")]),t._v(" "),s("p",[t._v("Chrome的默认策略是：每个标签对应一个渲染进程。但是如果从一个页面打开了新页面，而新页面和当前页面属于同一站点时，那么新页面会复用父页面的渲染进程。官方把这个默认策略叫"),s("code",[t._v("process-per-site-instance")]),t._v("。 直白的讲，就是如果几个页面符合同一站点，那么他们将被分配到一个渲染进程里面去。 所以，这种情况下，一个页面崩溃了，会导致同一站点的页面同时崩溃，因为他们使用了同一个渲染进程。 为什么要让他们跑在一个进程里面呢？ 因为在一个渲染进程里面，他们就会共享JS的执行环境，也就是说A页面可以直接在B页面中执行脚本。因为是同一家的站点，所以是有这个需求的。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("同一站点和同源策略区别")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("内存泄漏的解决方法: 因为当关闭一个页面时，整个渲染进程也会被关闭，之后该进程所占用的内存都会被系统回收，这样就轻松解决了浏览器页面的内存泄漏问题。")])]),t._v(" "),s("li",[s("p",[t._v("安全问题解决：使用安全沙箱。可以把沙箱看成是操作系统给进程上了一把锁，沙箱里面的程序可以运行，但是不能在你的硬盘上写入任何数据，也不能在敏感位置读取任何数据，例如你的文档和桌面。Chrome 把插件进程和渲染进程锁在沙箱里面，这样即使在渲染进程或者插件进程里面执行了恶意程序，恶意程序也无法突破沙箱去获取系统权限。")])])]),t._v(" "),s("h4",{attrs:{id:"目前多进程架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目前多进程架构"}},[t._v("#")]),t._v(" 目前多进程架构")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/js/chrome2.png",alt:""}})]),t._v(" "),s("p",[t._v("最新的 Chrome 浏览器包括：1 个浏览器（Browser）主进程、1 个 GPU 进程、1 个网络（NetWork）进程、多个渲染进程和多个插件进程。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("浏览器主进程：主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。")])]),t._v(" "),s("li",[s("p",[t._v("渲染进程：核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页，"),s("code",[t._v("排版引擎 Blink")]),t._v(" 和 "),s("code",[t._v("JavaScript 引擎 V8")]),t._v(" 都是运行在该进程中，默认情况下，Chrome 会为每个 Tab 标签创建一个渲染进程。出于安全考虑，渲染进程都是运行在沙箱模式下。")])]),t._v(" "),s("li",[s("p",[t._v("GPU进程：Chrome 刚开始发布的时候是没有 GPU 进程的。而 GPU 的使用初衷是为了实现 3D CSS 的效果，只是随后网页、Chrome 的 UI 界面都选择采用 GPU 来绘制，这使得 GPU 成为浏览器普遍的需求。最后，Chrome 在其多进程架构上也引入了 GPU 进程。")])]),t._v(" "),s("li",[s("p",[t._v("网络进程：主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，直至最近才独立出来，成为一个单独的进程。")])]),t._v(" "),s("li",[s("p",[t._v("插件进程：主要是负责插件的运行，因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响。")])])]),t._v(" "),s("h4",{attrs:{id:"优点-缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点-缺点"}},[t._v("#")]),t._v(" 优点/缺点")]),t._v(" "),s("p",[t._v("多进程模型提升了浏览器的稳定性、流畅性和安全性，但同样不可避免地带来了一些问题：")]),t._v(" "),s("ul",[s("li",[t._v("更高的资源占用。因为每个进程都会包含公共基础结构的副本（如 JavaScript 运行环境），这就意味着浏览器会消耗更多的内存资源。")]),t._v(" "),s("li",[t._v("更复杂的体系架构。浏览器各模块之间耦合性高、扩展性差等问题，会导致现在的架构已经很难适应新的需求了。")])]),t._v(" "),s("p",[t._v("对于上面这两个问题，Chrome 团队一直在寻求一种弹性方案，既可以解决资源占用高的问题，也可以解决复杂的体系架构的问题。")]),t._v(" "),s("h4",{attrs:{id:"未来面向服务的架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#未来面向服务的架构"}},[t._v("#")]),t._v(" 未来面向服务的架构")]),t._v(" "),s("p",[t._v("为了解决这些问题，在 2016 年，Chrome 官方团队使用“面向服务的架构”（Services Oriented Architecture，简称 SOA）的思想设计了新的 Chrome 架构。也就是说 Chrome 整体架构会朝向现代操作系统所采用的“面向服务的架构” 方向发展，原来的各种模块会被重构成独立的服务（Service），每个服务（Service）都可以在独立的进程中运行，访问服务（Service）必须使用定义好的接口，通过 IPC 来通信，从而构建一个更内聚、松耦合、易于维护和扩展的系统，更好实现 Chrome 简单、稳定、高速、安全的目标。")]),t._v(" "),s("p",[t._v("通俗来说就是以前是每个页面需要若干进程完成各自的工作，现在是将各个页面通用的功能（视频、网络、渲染等）发布为系统服务，页面在需要的时候与相应的服务通信完成需要的功能。这起码把进程间的耦合从页面中分离出去了。")]),t._v(" "),s("p",[t._v("Chrome 最终要把 UI、数据库、文件、设备、网络等模块重构为基础服务，类似操作系统底层服务")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/js/chrome3.png",alt:""}})]),t._v(" "),s("p",[t._v("Chrome 还提供灵活的弹性架构，在强大性能设备上会以多进程的方式运行基础服务，但是如果在资源受限的设备上（如下图），Chrome 会将很多服务整合到一个进程中，从而节省内存占用。")]),t._v(" "),s("ul",[s("li",[t._v("在资源不足的设备上，将服务合并到浏览器进程中")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/js/chrome4.png",alt:""}})]),t._v(" "),s("p",[t._v("早期浏览器：\n不稳定（单独进程）\n不流畅（单独进程）\n不安全（沙箱）")]),t._v(" "),s("p",[t._v("早期多进程架构：\n主进程 渲染进程 插件进程")]),t._v(" "),s("p",[t._v("现代多进程架构：\n主进程 渲染进程 插件进程 GPU进程 网络进程")]),t._v(" "),s("p",[t._v("未来：\n面向服务架构")]),t._v(" "),s("h2",{attrs:{id:"_2-tcp协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-tcp协议"}},[t._v("#")]),t._v(" 2. TCP协议")]),t._v(" "),s("p",[t._v("性能指标:")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("FP(First Paint):从开始加载到浏览器首次绘制像素到屏幕上的时间,也就是页面在屏幕上首次发生视觉变化的时间。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("FCP（First Contentful Paint）:浏览器首次绘制来自 DOM 的内容的时间。这是用户第一次开始看到页面内容，但仅仅有内容，并不意味着它是有用的内容（例如 Header、导航栏等），也不意味着有用户要消费的内容。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("FMP（First Meaningful Paint）:页面的主要内容绘制到屏幕上的时间。主要内容的定义因页面而异，例如对于博客文章，它的主要内容是标题和摘要，对于搜索页面，它的主要内容是搜索结果，对于电商的页面，图片则是主要内容。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("FSP（First Screen Paint）:页面从开始加载到首屏内容全部绘制完成的时间，用户可以看到首屏的全部内容。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"5"}},[s("li",[t._v("TTI（Time to Interactive）:表示网页第一次完全达到可交互状态的时间点，浏览器已经可以持续性的响应用户的输入。")])])])]),t._v(" "),s("p",[t._v("互联网中的数据是通过数据包来传输的。如果发送的数据很大，那么该数据就会被拆分为很多小数据包来传输。比如你现在听的音频数据，是拆分成一个个小的数据包来传输的，并不是一个大的文件一次传输过来的。")]),t._v(" "),s("ul",[s("li",[t._v("IP：把数据包送达目的主机")])]),t._v(" "),s("p",[t._v("IP协议把数据分解为数据包，打包时加上本机的Ip地址，称为"),s("code",[t._v("ip头数据")]),t._v("，通过物理底层传输出去。数据包的构成："),s("code",[t._v("数据部分+IP头部分")]),t._v("。\n"),s("img",{attrs:{src:"/images/js/ip.png",alt:""}})]),t._v(" "),s("ol",[s("li",[t._v("上层将含有“极客时间”的数据包交给网络层；")]),t._v(" "),s("li",[t._v("网络层再将 IP 头附加到数据包上，组成新的 IP 数据包，并交给底层；")]),t._v(" "),s("li",[t._v("底层通过物理网络将数据包传输给主机 B；")]),t._v(" "),s("li",[t._v("数据包被传输到主机 B 的网络层，在这里主机 B 拆开数据包的 IP 头信息，并将拆开来的数据部分交给上层；")]),t._v(" "),s("li",[t._v("最终，含有“极客时间”信息的数据包就到达了主机 B 的上层了。")])]),t._v(" "),s("h4",{attrs:{id:"udp-把数据包送达应用程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#udp-把数据包送达应用程序"}},[t._v("#")]),t._v(" UDP：把数据包送达应用程序")]),t._v(" "),s("p",[t._v("“用户数据包协议（User Datagram Protocol）”，简称 UDP。")]),t._v(" "),s("p",[t._v("UDP 中一个最重要的信息是端口号，端口号其实就是一个数字，每个想访问网络的程序都需要绑定一个端口号。通过端口号 "),s("code",[t._v("UDP")]),t._v(" 就能把指定的数据包发送给指定的程序了，所以 "),s("code",[t._v("IP")]),t._v(" 通过 "),s("code",[t._v("IP")]),t._v(" 地址信息把数据包发送给指定的电脑，而 "),s("code",[t._v("UDP")]),t._v(" 通过端口号把数据包分发给正确的程序。和 "),s("code",[t._v("IP")]),t._v(" 头一样，端口号会被装进"),s("code",[t._v("UDP")]),t._v(" 头里面，"),s("code",[t._v("UDP")]),t._v(" 头再和原始数据包合并组成新的 "),s("code",[t._v("UDP")]),t._v(" 数据包。"),s("code",[t._v("UDP")]),t._v(" 头中除了目的端口，还有源端口号等信息。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/js/udp.png",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("上层将含有“极客时间”的数据包交给传输层；")]),t._v(" "),s("li",[t._v("传输层会在数据包前面附加上 UDP 头，组成新的 UDP 数据包，再将新的 UDP 数据包交给网络层；")]),t._v(" "),s("li",[t._v("网络层再将 IP 头附加到数据包上，组成新的 IP 数据包，并交给底层；")]),t._v(" "),s("li",[t._v("数据包被传输到主机 B 的网络层，在这里主机 B 拆开 IP 头信息，并将拆开来的数据部分交给传输层；")]),t._v(" "),s("li",[t._v("在传输层，数据包中的 UDP 头会被拆开，并根据 UDP 中所提供的端口号，把数据部分交给上层的应用程序；")]),t._v(" "),s("li",[t._v("最终，含有“极客时间”信息的数据包就旅行到了主机 B 上层应用程序这里。")])]),t._v(" "),s("h4",{attrs:{id:"udp优-缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#udp优-缺点"}},[t._v("#")]),t._v(" UDP优/缺点")]),t._v(" "),s("p",[t._v("在使用 UDP 发送数据时，有各种因素会导致数据包出错，虽然 UDP 可以校验数据是否正确，但是对于错误的数据包，UDP 并不提供"),s("code",[t._v("重发机制")]),t._v("，只是丢弃当前的包，而且 UDP 在发送之后也无法知道是否能达到目的地。")]),t._v(" "),s("p",[t._v("UDP 不能保证数据可靠性，但是传输速度却非常快，所以 UDP 会应用在一些关注速度、但不那么严格要求数据完整性的领域，如在线视频、互动游戏等。")]),t._v(" "),s("h4",{attrs:{id:"tcp-把数据完整地送达应用程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-把数据完整地送达应用程序"}},[t._v("#")]),t._v(" TCP：把数据完整地送达应用程序")]),t._v(" "),s("p",[t._v("UDP缺点：")]),t._v(" "),s("ul",[s("li",[t._v("数据包在传输过程中容易丢失；")]),t._v(" "),s("li",[t._v("大文件会被拆分成很多小的数据包来传输，这些小的数据包会经过不同的路由，并在不同的时间到达接收端，而 UDP 协议并不知道如何组装这些数据包，从而把这些数据包还原成完整的文件。")])]),t._v(" "),s("p",[s("code",[t._v("TCP")]),t._v("（Transmission Control Protocol，传输控制协议）是一种面向连接的、可靠的、基于字节流的传输层通信协议。相对于 UDP，TCP 有下面两个特点:")]),t._v(" "),s("ul",[s("li",[t._v("对于数据包丢失的情况，TCP 提供"),s("code",[t._v("重传机制")]),t._v("；")]),t._v(" "),s("li",[t._v("TCP 引入了"),s("code",[t._v("数据包排序机制")]),t._v("，用来保证把乱序的数据包组合成一个完整的文件。")])]),t._v(" "),s("p",[t._v("和UDP 头一样，TCP 头除了包含了目标端口和本机端口号外，还提供了用于排序的序列号，以便接收端通过序号来重排数据包。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/js/TCP.png",alt:""}})]),t._v(" "),s("p",[t._v("与UDP不同的地方在于，通过 TCP 头的信息保证了一块大的数据传输的完整性。")]),t._v(" "),s("p",[t._v("互联网中的数据是通过数据包来传输的，数据包在传输过程中容易丢失或出错。IP 负责把数据包送达目的主机。\nUDP 负责把数据包送达具体应用。\n而 TCP 保证了数据完整地传输，它的连接可分为三个阶段：建立连接、传输数据和断开连接 三个阶段。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TCP传送数据时 浏览器端就做渲染处理了么？如果前面数据包丢了 后面数据包先来是要等么？类似的那种实时渲染怎么处理？针对数据包的顺序性？")]),t._v(" "),s("p",[t._v("接收到http响应头中的content-type类型时就开始准备渲染进程了，响应体数据一旦接受到便开始做DOM解析了！基于http不用担心数据包丢失的问题，因为丢包和重传都是在tcp层解决的。http能保证数据按照顺序接收的（也就是说，从tcp到http的数据就已经是完整的了，即便是实时渲染，如果发生丢包也得在重传后才能开始渲染）")])]),t._v(" "),s("h3",{attrs:{id:"_3-http请求流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-http请求流程"}},[t._v("#")]),t._v(" 3. HTTP请求流程")]),t._v(" "),s("p",[s("code",[t._v("HTTP")]),t._v(" 是一种允许浏览器向服务器获取资源的协议，是 "),s("code",[t._v("Web")]),t._v(" 的基础，通常由浏览器发起请求，用来获取不同类型的文件，例如 "),s("code",[t._v("HTML")]),t._v(" 文件、"),s("code",[t._v("CSS")]),t._v(" 文件、"),s("code",[t._v("JavaScript")]),t._v(" 文件、图片、视频等。此外，HTTP 也是浏览器使用最广的协议。")]),t._v(" "),s("h4",{attrs:{id:"浏览器端发起-http-请求流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器端发起-http-请求流程"}},[t._v("#")]),t._v(" 浏览器端发起 HTTP 请求流程")]),t._v(" "),s("p",[t._v("如果在浏览器地址栏里输入某个网站的地址，浏览器会完成哪些动作呢？")]),t._v(" "),s("ol",[s("li",[t._v("构建请求\n浏览器构建请求行信息（如下所示），构建好后，浏览器准备发起网络请求。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /index.html HTTP1.1\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("查找缓存\n当浏览器发现请求的资源已经在浏览器缓存中存有副本，它会拦截请求，返回该资源的副本，并直接结束请求，而不会再去源服务器重新下载。")])]),t._v(" "),s("li",[s("p",[t._v("准备 IP 地址和端口")])])]),t._v(" "),s("p",[t._v("浏览器使用 HTTP 协议作为应用层协议，用来封装请求的文本信息；并使用 TCP/IP 作传输层协议将它发到网络上，所以在 HTTP 工作开始之前，浏览器需要通过 TCP 与服务器建立连接。也就是说 HTTP 的内容是通过 TCP 的传输数据阶段来实现的")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/js/tcp+http.png",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("DNS解析")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("等待 TCP 队列")])])])]),t._v(" "),s("p",[t._v("Chrome 有个机制，同一个域名同时最多只能建立 6 个 TCP 连接，如果在同一个域名下同时有 10 个请求发生，那么其中 4 个请求会进入排队等待状态，直至进行中的请求完成。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http/1.1: 一个tcp同时只能处理一个请求，浏览器会为每个域名维护6个tcp连接！ 但是每个tcp连接是可以复用的，也就是处理完一个请求之后，不断开这个tcp连接，可以用来处理下个http请求！ \nhttp2: 可以并行请求资源的，所以如果使用http2，浏览器只会为每个域名维护一个tcp连接\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[s("p",[t._v("建立 TCP 连接")])]),t._v(" "),s("li",[s("p",[t._v("发送 HTTP 请求")])])]),t._v(" "),s("p",[t._v("浏览器会向服务器发送请求行，它包括了请求方法、请求 URI（Uniform Resource Identifier）和 HTTP 版本协议。")]),t._v(" "),s("h4",{attrs:{id:"服务器端处理-http-请求流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器端处理-http-请求流程"}},[t._v("#")]),t._v(" 服务器端处理 HTTP 请求流程")]),t._v(" "),s("ol",[s("li",[t._v("返回请求")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("curl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i  https"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("time.geekbang.org")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"/images/js/data.png",alt:""}})]),t._v(" "),s("p",[t._v("服务器会返回响应行，包括协议版本和状态码。")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("断开连接")])]),t._v(" "),s("p",[t._v("通常情况下，一旦服务器向客户端返回了请求数据，它就要关闭 TCP 连接。不过如果浏览器或者服务器在其头信息中加入了：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Connection")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Keep"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Alive \n")])])]),s("p",[t._v("那么 TCP 连接在发送后将仍然保持打开状态，这样浏览器就可以继续通过同一个 TCP 连接发送请求。保持 TCP 连接可以省去下次请求时需要建立连接的时间，提升资源加载速度。比如，一个 Web 页面中内嵌的图片就都来自同一个 Web 站点，如果初始化了一个持久连接，你就可以复用该连接，以请求其他资源，而不需要重新再建立新的 TCP 连接。")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("重定向")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("curl -I geekbang.org\n")])])]),s("p",[t._v("状态码301，从响应头的Location内容中取出重定向地址。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/js/location.png",alt:""}})]),t._v(" "),s("p",[t._v("-I表示只需要获取响应头和响应行数据，而不需要获取响应体的数据\n-i是为了返回响应行、响应头和响应体的数据")]),t._v(" "),s("p",[t._v("HTTP 请求示意图:\n"),s("img",{attrs:{src:"/images/js/httpLoop.png",alt:""}})]),t._v(" "),s("p",[t._v("浏览器中的 HTTP 请求从发起到结束一共经历了如下八个阶段：构建请求、查找缓存、准备 IP 和端口(DNS)、等待 TCP 队列、建立 TCP 连接、发起 HTTP 请求、服务器处理请求、服务器返回请求和断开连接。")])])}),[],!1,null,null,null);a.default=_.exports}}]);