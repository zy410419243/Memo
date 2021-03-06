Q: 你为什么不写测试单元？  
A(good): 我为什么要写测试单元？  
A(bad): 别把我包括进去谢谢

Q: 是不知道怎么写吗？  
A(g): 实际上 `JUnit` 的作者、`TDD` 的狂热拥护者 Kent Beck ~~鲁迅.jpg~~ 曾说过

> I get paid for code that works, not for tests, so my philosophy is to test as little as possible to reach a given level of confidence

基于现在的活其实基本都是清一色请求数据、写进页面的简单逻辑，我也就没去关注这个了  
当然这跟我没接触到流程复杂的业务也有关系，我会开始关注并尝试

A(b): 一开始是这样的，于是我就拼命去看文档，去看看成熟的开源项目里的测试用例是怎么写的  
慢慢就学会，并且习惯这种模式了

Q: 是项目没要求吗？  
A(g): 是有要求，但实际上大家都懂，没人会关心这玩意到底落地没，出问题加班改就是，于是也就是没要求了  
A(b): 就算没有，但不写的话我的工匠心会隐隐作痛

Q: 测试组会把所有问题都测出来吗？  
A(g): 理性来说不太指望，就我看来现在的测试还是不成熟，或者我接触到的暂时还不够成熟  
很多压力测试或者需要自动化的测试做得都不够到位  
再加上测试周期长，人少，工期又紧，我这也是同样的情况，何苦为难同行呢？  
A(b): 不能全指望测试，本来写测试用例就是职责的一部分，况且测试单元的意义远比测试结果的来得大

Q: 测试单元的意义？  
A(g): 为了代码健壮，碰上复杂业务的修改时不至于在 bug 里写 bug  
A(b): 能让接手的人方便看业务，哪怕业务再简单，但有时候就是一个测试用例胜过千字文档  
再一个，测试组做的是黑盒测试，只能指出问题的大致方位，这就需要额外的时间去找出问题的地方，会更浪费生命

Q: 有深入了解过测试框架吗？  
A(g): ...  
A(b): 只了解过 `jest`。其中最让我着迷的一个要素是 [`jsdom`](https://github.com/jsdom/jsdom#--------jsdom)  
像隔壁 `Java`，号称“一次编译到处运行”，但实际上我接触到的都是“一次编译到处报错”  
而 `jsdom` 居然能做到几乎全平台兼容，让浏览器行为保持一致。当然这是便乘了 `v8`，但其对 js 的影响 彳...

Q: 你停一下...咳咳...  
有了解过 `Integration test`、`Smoke test` 或者其他类型的测试吗？  
A(g): 有...还是没有呢？抱歉没有  
A(b): 只是了解到字面意义的程度，你提到的这两个其实应该让测试组的人干，毕竟他们才是专业的  
当下环境里，我能做的就是在测试单元跟随项目进度，bug fix 后补上 `Regression test`

...

后来 A(g) 离职了  
<b>A(b) 看着 A(g) 留下来的代码</b>，他也开始不写测试单元了  
毕竟<b>出事了再改</b>就是  
一份工作而已，哪有必要熬自己，何苦做吃力不讨好冤大头？

再后来

Q: 你为什么不写测试单元？  
A(bad): 我为什么要写测试单元？  
A(good-1): 别把我包括进去谢谢
