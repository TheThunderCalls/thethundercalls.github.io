(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{324:function(t,v,_){"use strict";_.r(v);var a=_(10),r=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"抽象类与接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#抽象类与接口"}},[t._v("#")]),t._v(" 抽象类与接口")]),t._v(" "),v("h2",{attrs:{id:"抽象方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#抽象方法"}},[t._v("#")]),t._v(" 抽象方法")]),t._v(" "),v("h2",{attrs:{id:"抽象类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#抽象类"}},[t._v("#")]),t._v(" 抽象类")]),t._v(" "),v("p",[t._v("​\t用abstract修饰一个类时，这个类叫做抽象类。")]),t._v(" "),v("p",[t._v("​\t抽象类是它所有子类的公共属性的集合，是包含一个或多个抽象方法的类，可以看作对类的进一步抽象")]),t._v(" "),v("p",[t._v("​\t抽象类无法直接实例化，只能通过子类对象向上转型得到抽象类对象。但是抽象类中存在构造方法【构造方法不能全都使用private修饰】")]),t._v(" "),v("p",[t._v("​\t抽象方法：使用abstract修饰的成员方法，该方法没有实现方法体，必须由子类重写。"),v("font",{attrs:{color:"red"}},[t._v("注意：abstract只能修饰可被重写的方法(非私有的成员方法)")])],1),t._v(" "),v("h2",{attrs:{id:"接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),v("p",[t._v("使用关键字 interface 声明的 称为接口。")]),t._v(" "),v("p",[v("em",[v("u",[v("strong",[t._v("接口中的成员")])])]),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("常量 -- "),v("font",{attrs:{color:"gray"}},[t._v("public final static")]),t._v(" 数据类型 常量名 = 常量值;  其中 "),v("code",[t._v("public final static")]),t._v("可以省略")],1),t._v(" "),v("li",[t._v("抽象方法 -- "),v("font",{attrs:{color:"gray"}},[t._v("public abstract")]),t._v(" 返回值类型 方法名(参数);  其中  "),v("code",[t._v("public abstract")]),t._v(" 可以省略")],1),t._v(" "),v("li",[t._v("静态方法 -- 和类中静态方法实现一样，但是接口中的静态方法"),v("font",{attrs:{color:"red"}},[t._v("只能")]),t._v("使用 声明该方法的接口 调用 "),v("code",[t._v("接口名.方法名()")])],1),t._v(" "),v("li",[t._v("默认方法 -- default 返回值类型 方法名(参数){} 其中 default 必须存在，默认方法在接口中必须提供实现，在实现类中可以按需重写。")])]),t._v(" "),v("p",[t._v("注意：")]),t._v(" "),v("p",[t._v("​\t如果类实现了多个接口，且多个接口中定义了同名同参数的default方法，那么在类中必须重写此default方法")]),t._v(" "),v("p",[v("em",[v("u",[v("strong",[t._v("接口下的继承&实现")])])])]),t._v(" "),v("p",[t._v("​\t接口只能继承(extends)接口，而不能实现(implements)接口，此时的继承为"),v("font",{attrs:{color:"red"}},[t._v("多继承")])],1),t._v(" "),v("p",[t._v("​\t类只能继承(extends)类(抽象类)，而不能继承接口，类需要实现(implements)接口，此时的继承为单继承，但可以实现多个接口")]),t._v(" "),v("p",[v("em",[v("u",[v("strong",[t._v("接口与抽象类的区别")])])])]),t._v(" "),v("p",[t._v("​\t语法：")]),t._v(" "),v("ol",[v("li",[t._v("​\t关键字： interface implements ； abstract extends")]),t._v(" "),v("li",[t._v("​    抽象类中可以有成员变量、类变量、代码块、静态代码块、构造方法、成员方法、抽象方法和类方法，而接口中只有常量(public static final)和抽象方法(public abstract)，jdk8中新增static和default方法")]),t._v(" "),v("li",[t._v("​    在抽象类中，可以使用public和protected访问控制权限修饰符；而接口中只能使用public(jdk8存在default方法)")]),t._v(" "),v("li",[t._v("​    抽象类只能单继承，接口可以继承多个接口，并且一个类可以实现多个接口")])]),t._v(" "),v("p",[t._v("​\t设计层次：")]),t._v(" "),v("ol",[v("li",[t._v("​\t抽象层次不同：抽象类是对类的抽象，接口是对行为的抽象")]),t._v(" "),v("li",[t._v("​    跨域不同：抽象类和子类体现的是一种继承关系(is - a)；接口和实现类体现的是约束关系(has - a)")]),t._v(" "),v("li",[t._v("​    设计层次不同：抽象类需要根据子类来设计，而接口的设计无须知道实现类")])])])}),[],!1,null,null,null);v.default=r.exports}}]);