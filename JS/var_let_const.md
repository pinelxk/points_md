# var let const 的区别

## 出现 let const 的原因
1、为了解决作用域的问题

## let const定义的变量
1、会进行变量提升，但是在赋值之前不可访问，会报错（暂时性死区）
2、不可重复声明
3、全局声明的变量不会挂到window作用域上, 而是存到了script（作用域）中

## const定义的变量
1、const必须立即初始化
2、const声明的变量引用不可改变