//有一个对象作为原型，新对象都是以该对象为模板创建的
//原型模式可以很容易实现继承，而且新的实例对于方法的继承继承的都是引用，可以节约内存

//方法一： Object.create( prototype, optionalDescriptorObjects )
var vehicle = {
  getModel: function () {
    console.log( "The model of this vehicle is.." + this.model );
  }
};
 
var car = Object.create(vehicle, {
 
  "id": {
    value: MY_GLOBAL.nextId(),
    // writable:false, configurable:false by default
    enumerable: true
  },
 
  "model": {
    value: "Ford",
    enumerable: true
  }
 
});

//方法二： 新建一个构造函数，构造函数的原型指向该对象
var vehiclePrototype = {
 
  init: function ( carModel ) {
    this.model = carModel;
  },
 
  getModel: function () {
    console.log( "The model of this vehicle is.." + this.model);
  }
};
 
 
function vehicle( model ) {
 
  function F() {};
  F.prototype = vehiclePrototype;
 
  var f = new F();
 
  f.init( model );
  return f;
 
}
 
var car = vehicle( "Ford Escort" );
car.getModel();
