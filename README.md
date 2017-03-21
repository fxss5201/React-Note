# ReactNote 

### 一：书籍 && 文章<br/>
1.[《React’s diff algorithm》](http://calendar.perfplanet.com/2013/diff/)   ——by Christopher Chedeau  <br />
作者是Facebook图像团队工程师，本文站在初学者的角度通俗易懂地介绍了React的virtualDOM及其实现：diff算法, <br />
介绍了diff算法如何进行DOM树的查找以及事件监听和委托。

2.[React官方文档](https://facebook.github.io/react/index.html)  <br />
react完备详细的介绍，作为文档适合新手查阅和学习。

3.[《Lean React》](https://zhuanlan.zhihu.com/p/21107252) <br />
天猫前端工程师编写的react学习文档，react到redux到webpack，react内部机制以及性能管理和数据可视化，还在不断更新中。

4.[《Basic Theoretical Concepts》](https://github.com/reactjs/react-basic) ——by Sebastian Markbåge <br />
reactAPI核心作者编写，阐述了他设计react的初衷。

5.[《React.js Introduction For People Who Know Just Enough jQuery To Get By》](http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/)<br />
这是一篇很有趣味的文章，正如文章开头所说，大多数教程都是从介绍react如何优秀开始，而本教程直接带领读者通过使用jQuery和react两种不同方法，
来实现facebook的评论框，代码详尽，适合熟悉jquery&&学完react基础急需demo练手的同学。英文不给力的同学可以点击[这里](https://segmentfault.com/a/1190000003501752)。

6.[React框架解析](http://www.open-open.com/lib/view/open1405409050727.html)<br />
一篇短小精悍的文章，详细地介绍了react运行机制。[英文版](http://blog.reverberate.org/2014/02/react-demystified.html)

7.[Redux中文文档](http://cn.redux.js.org/)<br />
redux文档翻译水平很不错，不过需要有ES6的基础。

8.[《React源码剖析-this.setState》](https://zhuanlan.zhihu.com/p/20328570?refer=purerender)<br />
作者从源码入手，enqueueUpdate函数通过isBatchingUpdates变量的true或false来判断决定是否刷新组件，进而引入react的 Transaction事务机制。
文章难度较大，但是核心思想是setState是一个异步方法，根据官方文档可知，setState其实可传入两个参数，一个是对象即state,另一个是回调函数。
setState在render时才会调用。这样做的是为了批量处理DOM时提升性能。本文我也没有100%吃透，在今后的工作中会逐渐加深理解。

9.[《Getting started with redux》](https://egghead.io/courses/getting-started-with-redux)<br />
知名学习网站egghead.io的旗下redux系列课程，适合redux入门。

10.[《Immutable.js浅析及实践》](https://segmentfault.com/a/1190000003910357)<br />
介绍了React中Immutable.js库的理念和简单使用,介绍了immutable如何通过Structural Sharing的方式实现组件快速更新，提升react性能。

11.[《why webpack run with +X hidden modules?》](https://stackoverflow.com/questions/28858176/what-does-webpack-mean-by-xx-hidden-modules)<br/>
介绍了webpack在运行时，为什么控制台会出现 +X hidden modules的显示信息。其实是webpack makes your attention focus on modules而不是依赖，并无大碍。也可以用`--display-modules`命令来全部显示出来。另:stackoverflow真是个神奇的网站。

12.[《make your react components pretty》](https://medium.com/walmartlabs/make-your-react-components-pretty-a1ae4ec0f56e#.4gr3qppoz)<br/>
本文关注在项目中构建大型组件时，解决过多的props和state以及return造成代码观感丑陋的方案。接入es6和逻辑优化增强代码的可读性。

13.[《深入React技术栈》](https://zhuanlan.zhihu.com/purerender)<br/>
国内关于react实践方面较新的书籍，原为知乎专栏发布的文章整理成书。书分为三大内容，react，flux，redux。全书用es6编写，适合有一定react使用经验的人阅读。

14.[《在2017年学习react+redux的一些建议》](https://github.com/iuap-design/blog/issues/178)<br/>
用友网络团队的分享，分为上中下三篇，对如何编写更优雅的react组件进行分析，以及对于2017年层出不穷的react第三方插件和工具的看法与展望。
