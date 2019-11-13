(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.boy = function() {
	this.initialize(img.boy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.germs_sm = function() {
	this.initialize(img.germs_sm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,125);


(lib.hand_spray = function() {
	this.initialize(img.hand_spray);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,172);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,46);


(lib.product = function() {
	this.initialize(img.product);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,109);


(lib.spray_01 = function() {
	this.initialize(img.spray_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,93);


(lib.spray_02 = function() {
	this.initialize(img.spray_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.whatittaketoprotect = function() {
	this.initialize(img.whatittaketoprotect);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,22);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.whitebox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whitebox, new cjs.Rectangle(0,0,300,250), null);


(lib.whatittakes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.whatittaketoprotect();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whatittakes, new cjs.Rectangle(0,0,65,22), null);


(lib.spray_mist = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.spray_02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1533,scaleY:1.1533,rotation:180,x:323,y:311},0).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.118)","#FFFFFF","rgba(255,255,255,0)"],[0,0,0,1],0,0,0,0,0,113.3).s().p("AsbMcQlJlKAAnSQAAnRFJlKQFKlJHRAAQHTAAFIFJQFKFKAAHRQAAHSlKFKQlIFJnTAAQnRAAlKlJg");
	this.shape.setTransform(156,154.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-307.5,-189.5,1129.1,765);


(lib.spray = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.spray_01();
	this.instance.setTransform(4.5,0,1,0.8635,3.2113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.3,88.1);


(lib.product_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.product();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.product_1, new cjs.Rectangle(0,0,71,109), null);


(lib.numbers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape.setTransform(14.425,400.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AAMBqIAAiqIgmAlIgWgZIA/g1IAhAAIAADTg");
	this.shape_1.setTransform(12.35,369.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AhGBsIAAgmIBRhPIAIgIIAHgIIAFgKQACgFAAgFQAAgHgCgEQgDgFgEgEQgEgEgGgCQgFgCgGAAQgNAAgJAIQgIAIgCANIgmgDQABgPAGgLQAGgLAJgIQAJgHANgEQAMgEAOAAQAOAAAMAEQANAEAJAHQAJAHAGAMQAFALAAAPQAAAUgJAPQgJANgPAOIhAA9IBhAAIAAAgg");
	this.shape_2.setTransform(14.425,338.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AgXBrQgMgDgKgGQgJgGgHgJQgHgKgDgNIAmgKQADANAJAHQAIAHANAAQAIAAAGgCQAHgCAFgFQAEgEADgGQADgGAAgIQAAgKgEgHQgFgGgGgDQgHgEgIgBIgQgBIgJAAIAAggIAKAAIAOAAIANgEQAGgEADgFQAEgGAAgJQAAgNgIgIQgJgHgNAAQgKAAgJAGQgIAGgEALIgmgKQADgMAHgJQAHgIAJgGQAJgFAKgDQALgDAMAAQANAAAMAEQAMAEAKAHQAJAHAGAKQAFALAAAOQAAARgKANQgJAOgRAEIAAABQAUADALANQAKAOAAAUQAAAPgGAMQgGAMgJAIQgKAIgNAEQgNAEgPAAQgMAAgLgDg");
	this.shape_3.setTransform(14.175,307.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AALBqIAAgrIhZAAIAAgkIBViEIAoAAIAACIIAgAAIAAAgIggAAIAAArgAgqAfIA1AAIAAhVIAAAAg");
	this.shape_4.setTransform(14.45,276.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AguBgQgSgMgIgZIAmgKQAEAMAJAGQAIAHANAAQAIAAAHgDQAHgDAFgEQAFgFACgHQADgGAAgIQAAgMgEgHQgEgIgHgFQgHgFgJgBQgIgCgKgBQgMAAgLADQgMACgJAFIAChyIB4AAIAAAgIhVAAIgBArIALgCIALgBQAQAAANAFQANAFAJAJQAJAKAGALQAFANAAARQAAARgGANQgGAOgKAKQgKAJgPAFQgOAFgPAAQgZAAgSgMg");
	this.shape_5.setTransform(14.125,245.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgeBnQgNgFgKgJQgKgKgGgNQgGgOAAgQQAAgRAGgOQAGgMAIgOIA3hWIAqAAIgyBPIABAAIAIgCIALgBQAOgBAMAGQALAFAJAKQAIAJAFALQAFAMAAAOQAAARgGAOQgGANgKAJQgKAKgOAFQgOAFgQAAQgQAAgOgFgAgNAAQgHADgFAFQgGAFgDAHQgDAHAAAIQAAAIADAHQADAIAGAEQAFAGAHADQAHADAHAAQAIAAAHgDQAHgDAFgGQAGgEADgIQADgHAAgIQAAgIgDgHQgDgHgGgFQgFgFgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_6.setTransform(14.425,214.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("Ag2BqIBWixIhnAAIAAgiICPAAIAAAhIhUCyg");
	this.shape_7.setTransform(14.025,183.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AgbBqQgNgEgKgIQgJgIgGgMQgGgMAAgQQAAgKADgJQAEgIAFgHQAFgHAIgFQAHgDAHgCIAAAAQgQgFgIgNQgIgNAAgRQAAgNAFgLQAFgKAJgHQAJgHAMgEQAMgEAMAAQANAAAMAEQAMAEAJAHQAJAHAFAKQAFALAAANQAAARgIANQgIANgQAFIAAAAQAIACAHADQAHAFAFAHQAFAHAEAIQADAJAAAKQAAAQgGAMQgGAMgJAIQgKAIgNAEQgNAEgPAAQgOAAgNgEgAgNALQgGACgFAEQgFAFgDAGQgDAGAAAIQAAAPAKAJQAKAKAPAAQAQAAAKgKQAKgJAAgPQAAgIgDgGQgDgGgFgFQgEgEgHgCQgHgDgHAAQgGAAgHADgAgUhGQgIAJAAAMQAAAMAIAJQAIAIAMAAQAGAAAFgCQAGgCAEgEQAEgEACgGQACgFAAgGQAAgMgIgJQgIgIgNAAQgNAAgHAIg");
	this.shape_8.setTransform(14.425,152.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AgpBsIAyhPIgBAAIgIADIgLABQgOgBgLgFQgMgGgJgIQgIgKgFgMQgFgMAAgOQAAgQAGgNQAGgOAKgKQAKgJAOgFQAOgFAPAAQARAAANAFQAOAFALAJQAJAJAGAOQAGANAAARQAAARgGAOQgFANgJAOIg3BVgAgPhGQgHADgFAFQgGAGgDAHQgDAHAAAIQAAAIADAHQADAHAGAFQAFAGAHABQAHADAIABQAHgBAHgDQAHgBAGgGQAFgFADgHQADgHAAgIQAAgIgDgHQgDgHgFgGQgGgFgHgDQgHgDgHAAQgIAAgHADg");
	this.shape_9.setTransform(14.425,121.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_10.setTransform(14.425,90.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.numbers, new cjs.Rectangle(3.5,69,21.9,355), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,49,46), null);


(lib.girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.boy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.girl, new cjs.Rectangle(0,0,300,250), null);


(lib.germs_group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.germs_sm();
	this.instance.setTransform(-6,127,1,1,0,-90,90);

	this.instance_1 = new lib.germs_sm();
	this.instance_1.setTransform(112,277,1,1,-90);

	this.instance_2 = new lib.germs_sm();
	this.instance_2.setTransform(381,140,1,1,0,0,180);

	this.instance_3 = new lib.germs_sm();
	this.instance_3.setTransform(421,0,1,1,90);

	this.instance_4 = new lib.germs_sm();
	this.instance_4.setTransform(310,0,1,1,90);

	this.instance_5 = new lib.germs_sm();
	this.instance_5.setTransform(40,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.germs_group, new cjs.Rectangle(-6,0,427,277), null);


(lib.copy_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgCQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgCgCg");
	this.shape.setTransform(119.025,18.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_1.setTransform(116.95,15.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_2.setTransform(113.825,17.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AgHAdIgFgGIAAAHIgHAAIAAg8IAHAAIAAAdQACgDAEgCQADgCADAAQAFAAADACIAGAEIAEAFQACAEAAAEQAAAEgCAEIgEAGIgFAEQgEACgEAAQgEAAgEgCgAgFgBIgEACQgCACAAADIgBAFIABAGQAAAAAAABQAAAAABABQAAAAAAABQABAAAAABIAEADIAFABIAFgBIAFgDIACgEIABgGIgBgFIgCgFIgFgCIgFgBIgFABg");
	this.shape_3.setTransform(109.275,15.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgHATIgEgCIgDgEIgBgEQAAgFACgDIAGgDIAHgBIAHgBIADAAIAAgBQAAgEgDgCQgCgCgFAAIgFABIgFADIgEgEQADgDAEgBIAHgCQAIAAAEAEQAEAEAAAIIAAAPIAAAEIAAADIgGAAIAAgDIAAgDQgCADgDACQgDACgEAAIgFgBgAgFACQgEACAAAEQAAADADACQACABADAAIAEAAIAEgDIACgDIABgFIAAgCIgHAAQgFAAgDABg");
	this.shape_4.setTransform(104.625,17.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_5.setTransform(101.65,15.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_6.setTransform(96.325,17.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AAKAeIAAgWQAAgFgCgDQgCgBgEAAIgFABIgDACIgCAEIgBAGIAAASIgGAAIAAg7IAGAAIAAAcIAAAAIACgCIADgCIADgCIADAAIAGABIAFADQACACAAACIABAGIAAAXg");
	this.shape_7.setTransform(91.925,15.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AAAAYIgCgDIgBgEIgBgFIAAgUIgIAAIAAgFIAIAAIAAgLIAGAAIAAALIALAAIAAAFIgLAAIAAASIAAADIAAADIACACIADAAIADAAIADAAIAAAFIgEABIgDABIgGgBg");
	this.shape_8.setTransform(88.275,16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AAKATIgKgcIAAAAIgJAcIgGAAIgMglIAGAAIAJAcIAKgcIAFAAIAKAcIAJgcIAGAAIgLAlg");
	this.shape_9.setTransform(81.75,17.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AgIASIgGgEIgDgGIgCgIQAAgDACgEQABgEACgCIAGgEQAEgCAEAAIAIACIAGAEQACACACAEQACAEAAADQAAAEgCAEIgEAGIgGAEIgIACQgEAAgEgCgAgFgMIgEADIgCAFIgCAEIACAGIACAEIAEADIAFABIAGgBIAEgDIACgEIABgGIgBgEIgCgFIgEgDIgGgBIgFABg");
	this.shape_10.setTransform(76.45,17.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_11.setTransform(73.1,15.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B3785").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_12.setTransform(71.2,15.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B3785").s().p("AgIASIgGgEIgDgGIgCgIQAAgDACgEQABgEACgCIAGgEQAEgCAEAAIAIACIAGAEQACACACAEQACAEAAADQAAAEgCAEIgEAGIgGAEIgIACQgEAAgEgCgAgFgMIgEADIgCAFIgCAEIACAGIACAEIAEADIAFABIAGgBIADgDIADgEIABgGIgBgEIgDgFIgDgDIgGgBIgFABg");
	this.shape_13.setTransform(67.9,17.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B3785").s().p("AgEAfIAAgfIgIAAIAAgGIAIAAIAAgIIABgGIACgFIADgEIAGgBIADABIACAAIgBAGIgEgBIgDABIgDACIgBAEIAAAEIAAAHIAJAAIAAAGIgJAAIAAAfg");
	this.shape_14.setTransform(64.4,15.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B3785").s().p("AgIAdIgGgEIgEgGIgBgIIABgIIAEgFIAHgEQADgCAEAAQAEAAADACQAEACACADIAAgdIAHAAIAAA8IgHAAIAAgHIgFAGQgEACgEAAQgEAAgEgCgAgEgBIgFACIgCAFIgBAFIABAGIACAEIAFADIAEABIAGgBIAEgDIACgEIABgGIgBgFIgCgFIgEgCIgGgBIgEABg");
	this.shape_15.setTransform(58.325,15.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B3785").s().p("AALATIAAgVQgBgFgCgDQgCgCgEAAIgFABIgDADIgCAEIgBAFIAAASIgGAAIAAgbIAAgFIAAgEIAGAAIAAADIAAADIAAAAIACgDIACgCIAEgCIAEAAIAGABIAEADQACACAAADIACAGIAAAWg");
	this.shape_16.setTransform(53.75,17.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B3785").s().p("AgHATIgEgCIgDgEIgBgEQAAgFACgDIAGgDIAHgBIAHgBIADAAIAAgBQAAgEgDgCQgCgCgFAAIgFABIgFADIgEgEQADgDAEgBIAHgCQAIAAAEAEQAEAEAAAIIAAAPIAAAEIAAADIgGAAIAAgDIAAgDQgCADgDACQgDACgEAAIgFgBgAgFACQgEACAAAEQAAADADACQACABADAAIAEAAIAEgDIACgDIABgFIAAgCIgHAAQgFAAgDABg");
	this.shape_17.setTransform(49.425,17.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B3785").s().p("AgIAdIgGgEIgEgGIgBgIIABgIIAEgFIAHgEQADgCAEAAQAEAAADACQAEACACADIAAgdIAHAAIAAA8IgHAAIAAgHIgFAGQgEACgEAAQgEAAgEgCgAgEgBIgFACIgCAFIgBAFIABAGIACAEIAFADIAEABIAGgBIAEgDIACgEIABgGIgBgFIgCgFIgEgCIgGgBIgEABg");
	this.shape_18.setTransform(42.725,15.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B3785").s().p("AgHATIgEgCIgDgEIgBgEQAAgFACgDIAGgDIAHgBIAHgBIADAAIAAgBQAAgEgDgCQgCgCgFAAIgFABIgFADIgEgEQADgDAEgBIAHgCQAIAAAEAEQAEAEAAAIIAAAPIAAAEIAAADIgGAAIAAgDIAAgDQgCADgDACQgDACgEAAIgFgBgAgFACQgEACAAAEQAAADADACQACABADAAIAEAAIAEgDIACgDIABgFIAAgCIgHAAQgFAAgDABg");
	this.shape_19.setTransform(38.225,17.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B3785").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_20.setTransform(34.025,17.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B3785").s().p("AgJATIAAgbIgBgFIAAgEIAGAAIAAADIAAADIABAAIABgDIACgCIAEgCIAEAAIABAAIACAAIgBAHIgDgBQgGAAgBAEQgDAEAAAFIAAASg");
	this.shape_21.setTransform(30.625,17.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B3785").s().p("AgIASQgDgBgDgEIAFgEIAEAEIAFABIADAAIACgBIACgCIABgDIgBgCIgCgCIgCgBIgDgBIgEgBIgEgBIgDgDIgBgFIABgEQAAgBAAAAQABgBAAAAQABgBAAAAQABgBAAAAIAEgCIAFgBQAEAAADACQADACACADIgFAEIgDgEIgFgBIgBAAIgDABIgBACIgBACIABACIACACIADABIACABIAFABIAEABIADADIABAFQAAADgCACIgDAEIgFACIgFABQgEAAgEgCg");
	this.shape_22.setTransform(25.075,17.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B3785").s().p("AgOAcIgDgBIABgFIACABIACAAQABAAABAAQABAAAAgBQABAAAAAAQABAAAAgBIADgEIACgIIgQgkIAHAAIALAcIAAAAIAMgcIAGAAIgSAtIgBAEIgCAEIgDACIgGAAg");
	this.shape_23.setTransform(21.5,18.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B3785").s().p("AgHATIgEgCIgDgEIgBgEQAAgFACgDIAGgDIAHgBIAHgBIADAAIAAgBQAAgEgDgCQgCgCgFAAIgFABIgFADIgEgEQADgDAEgBIAHgCQAIAAAEAEQAEAEAAAIIAAAPIAAAEIAAADIgGAAIAAgDIAAgDQgCADgDACQgDACgEAAIgFgBgAgFACQgEACAAAEQAAADADACQACABADAAIAEAAIAEgDIACgDIABgFIAAgCIgHAAQgFAAgDABg");
	this.shape_24.setTransform(17.425,17.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B3785").s().p("AALATIgLgcIAAAAIgJAcIgGAAIgMglIAGAAIAJAcIAKgcIAFAAIAKAcIAJgcIAHAAIgMAlg");
	this.shape_25.setTransform(12.45,17.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B3785").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_26.setTransform(8.55,15.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2B3785").s().p("AAUAcIgGgOIgbAAIgGAOIgIAAIAZg3IAGAAIAYA3gAALAIIgLgbIgLAbIAWAAg");
	this.shape_27.setTransform(4.825,16.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2B3785").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIABgCQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgCgCg");
	this.shape_28.setTransform(85.075,9.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B3785").s().p("AgIAdIgGgEIgEgGIgBgIIABgIIAEgFIAHgEQADgCAEAAQAEAAADACQAEACACADIAAgdIAHAAIAAA8IgHAAIAAgHIgFAGQgEACgEAAQgEAAgEgCgAgEgBIgFACIgCAFIgBAFIABAGIACAEIAFADIAEABIAGgBIAEgDIACgEIABgGIgBgFIgCgFIgEgCIgGgBIgEABg");
	this.shape_29.setTransform(81.475,7.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2B3785").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_30.setTransform(76.925,8.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B3785").s().p("AAAAXIgCgCIgBgEIgBgFIAAgTIgIAAIAAgGIAIAAIAAgKIAGAAIAAAKIALAAIAAAGIgLAAIAAARIAAADIAAADIACACIADABIADAAIADgCIAAAGIgEABIgDAAIgGgBg");
	this.shape_31.setTransform(73.275,7.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2B3785").s().p("AgFASIgGgEQgCgCgCgEIgBgIIABgHIAEgGIAGgEIAHgCQAFAAADACQAEABADADIgFAFIgFgEIgFgBIgEABIgEADIgCAFIgBAEIABAFIACAFIAEADIAEABQAHAAADgFIAFAFQgDADgEABIgIACIgHgCg");
	this.shape_32.setTransform(70.125,8.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2B3785").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_33.setTransform(65.875,8.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B3785").s().p("AgJATIAAgbIgBgFIAAgEIAGAAIAAADIAAADIABAAIABgDIACgCIAEgCIAEAAIABAAIACAAIgBAHIgDgBQgGAAgBAEQgDAEAAAFIAAASg");
	this.shape_34.setTransform(62.475,8.075);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B3785").s().p("AgCAcIAAgkIAFAAIAAAkgAgCgUQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIACgBIADABIACADIgCADQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_35.setTransform(59.9,7.175);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2B3785").s().p("AgIAdIgGgEIgEgGIgBgIIABgIIAEgFIAHgEQADgCAEAAQAEAAADACQAEACACADIAAgdIAHAAIAAA8IgHAAIAAgHIgFAGQgEACgEAAQgEAAgEgCgAgEgBIgFACIgCAFIgBAFIABAGIACAEIAFADIAEABIAGgBIAEgDIACgEIABgGIgBgFIgCgFIgEgCIgGgBIgEABg");
	this.shape_36.setTransform(56.475,7.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2B3785").s().p("AgIASQgDgBgDgEIAFgEIAEAEIAFABIADAAIACgBIACgCIABgDIgBgCIgCgCIgCgBIgDgBIgEgBIgEgBIgDgDIgBgFIABgEQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBIAEgCIAFgBQAEAAADACQADACACADIgFAEIgDgEIgFgBIgBAAIgDABIgBACIgBACIABACIACACIADABIACABIAFABIAEABIADADIABAFQAAADgCACIgDAEIgFACIgFABQgEAAgEgCg");
	this.shape_37.setTransform(50.175,8.125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2B3785").s().p("AgHATIgEgCIgDgEIgBgEQAAgFACgDIAGgDIAHgBIAHgBIADAAIAAgBQAAgEgDgCQgCgCgFAAIgFABIgFADIgEgEQADgDAEgBIAHgCQAIAAAEAEQAEAEAAAIIAAAPIAAAEIAAADIgGAAIAAgDIAAgDQgCADgDACQgDACgEAAIgFgBgAgFACQgEACAAAEQAAADADACQACABADAAIAEAAIAEgDIACgDIABgFIAAgCIgHAAQgFAAgDABg");
	this.shape_38.setTransform(46.375,8.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2B3785").s().p("AgIAdIgGgEIgEgGIgBgIIABgIIAEgFIAHgEQADgCAEAAQAEAAADACQAEACACADIAAgdIAHAAIAAA8IgHAAIAAgHIgFAGQgEACgEAAQgEAAgEgCgAgEgBIgFACIgCAFIgBAFIABAGIACAEIAFADIAEABIAGgBIAEgDIACgEIABgGIgBgFIgCgFIgEgCIgGgBIgEABg");
	this.shape_39.setTransform(39.675,7.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2B3785").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_40.setTransform(35.125,8.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2B3785").s().p("AgIASQgDgBgDgEIAFgEIAEAEIAFABIADAAIACgBIACgCIABgDIgBgCIgCgCIgCgBIgDgBIgEgBIgEgBIgDgDIgBgFIABgEQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBIAEgCIAFgBQAEAAADACQADACACADIgFAEIgDgEIgFgBIgBAAIgDABIgBACIgBACIABACIACACIADABIACABIAFABIAEABIADADIABAFQAAADgCACIgDAEIgFACIgFABQgEAAgEgCg");
	this.shape_41.setTransform(31.175,8.125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2B3785").s().p("AgIASIgEgDQgCgCAAgDIgBgGIAAgWIAFAAIAAAVQABAFACADQACACAEAAIAFgBIADgDQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBAAAAIABgFIAAgSIAGAAIAAAbIAAAFIAAAEIgFAAIAAgDIAAgDIgBAAIgCADIgDACIgDACIgEAAIgGgBg");
	this.shape_42.setTransform(27.35,8.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2B3785").s().p("AALATIAAgVQAAgFgDgDQgCgCgEAAIgFABIgDADIgCAEIgBAFIAAASIgGAAIAAgbIAAgFIAAgEIAFAAIAAADIAAADIABAAIACgDIADgCIADgCIAEAAIAFABIAFADQACACAAADIABAGIAAAWg");
	this.shape_43.setTransform(20.7,8.075);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2B3785").s().p("AgGASQgEgBgCgDIgEgGIgBgIIABgHQABgEADgCIAGgEQAEgCADAAQAEAAADACIAGAEIADAGIABAHIAAACIgdAAIABAFIADADIAEADIADABIAHgBQADgCACgDIAFAEQgDAEgEACQgEACgGAAQgDAAgDgCgAAMgCQAAgFgDgDQgDgDgGAAQgEAAgDADQgDADgBAFIAXAAIAAAAg");
	this.shape_44.setTransform(16.325,8.125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2B3785").s().p("AAKAeIAAgWQAAgFgCgDQgCgBgEAAIgFABIgDACIgCAEIgBAGIAAASIgGAAIAAg7IAGAAIAAAcIAAAAIACgCIADgCIADgCIADAAIAGABIAFADQACACAAACIABAGIAAAXg");
	this.shape_45.setTransform(11.925,6.975);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2B3785").s().p("AAOAcIgOgvIgNAvIgIAAIgQg3IAHAAIAOAuIANguIAHAAIAOAuIANguIAHAAIgQA3g");
	this.shape_46.setTransform(5.85,7.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_04, new cjs.Rectangle(0,0,122.3,23.9), null);


(lib.copy_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AgGARIgGgEIgEgGIgCgHQABgDABgDIAEgGQADgDADgBIAGgBQAEAAAEABQADABACADIAEAGQACADgBADIgBAHIgEAGIgFAEIgIABIgGgBg");
	this.shape.setTransform(160.25,43.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgXAwQgLgDgGgIIASgTQAEAFAFADQAFACAHAAQAEAAAEgBQAFgCgBgEQAAgDgEgCIgIgEIgMgDQgGgBgGgDQgGgDgEgEQgDgGAAgJQgBgJAEgGQAEgHAFgEQAGgDAIgCQAHgCAGAAQAKAAAKADQAKACAGAIIgSASQgHgIgLAAQgCAAgDABQgFACAAAFQAAAEAFABIAIADIAMADQAGACAGACQAGADADAFQAFAFAAAKQgBAJgEAHQgEAFgHAEQgFAEgIABQgJACgGAAQgKAAgLgDg");
	this.shape_1.setTransform(152.7,40.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AAvAyIAAg4QAAgHgDgFQgEgEgHAAQgFAAgDABQgEACgCADIgDAHIgBAIIAAAzIgdAAIAAgzIAAgGIgCgHIgDgGQgDgCgFAAQgGAAgEACQgDACgCADIgDAIIAAAIIAAAxIgfAAIAAhgIAeAAIAAANIAAAAIAEgGIAGgFIAIgDIAKgCQAKAAAIAEQAHAFAEAJQAFgKAIgEQAHgEALAAQAKAAAGADQAHAEAEAFQAEAGABAIQACAIAAAIIAAA5g");
	this.shape_2.setTransform(139.35,40.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AghAyIAAhgIAeAAIAAAPIAAAAQAEgJAHgEQAGgFAKAAIAFAAIAFABIAAAcIgGgCIgHAAQgIAAgFACQgFACgDAFQgCAEAAAGIgBAMIAAApg");
	this.shape_3.setTransform(127.025,40.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgQAvQgKgEgHgGQgHgHgEgJQgFgKAAgLQAAgKAFgKQAEgKAHgGQAHgHAKgDQAKgEAKAAQALAAAIAEQAJADAGAHQAGAGADAKQADAKAAAKIAAAJIhFAAQACAJAGAFQAGAFAIAAQAHAAAFgDQAGgEADgEIAVAOQgHAKgLAFQgLAFgMAAQgKAAgKgEgAgGgbQgEABgDADIgEAGIgCAHIAnAAQAAgHgFgGQgFgGgIABQgEAAgEABg");
	this.shape_4.setTransform(116.825,40.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgcBHQgNgDgKgIIAQgZQAHAGAIADQAIADAJAAQANAAAGgGQAHgHAAgKIAAgKIgBAAQgFAHgHADQgIADgGAAQgLAAgJgEQgIgDgHgHQgGgHgDgIQgEgJAAgLQAAgKADgJQADgJAGgHQAGgHAIgFQAIgEALAAQAGAAAEACIAKADIAHAFIAFAFIAAAAIAAgMIAcAAIAABYQAAAbgOAOQgOAPgbAAQgNAAgNgDgAgHgsQgFACgDADQgDADgCAEQgCAFAAAFQAAAEACAFQACAEADADQADAEAFACQAEABAEAAQAFAAAFgBQAEgCADgEQAEgDABgEQACgFAAgEQAAgFgCgFQgBgEgEgDQgDgDgEgCQgFgCgFAAQgEAAgEACg");
	this.shape_5.setTransform(104.475,42.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgcAuQgHgDgEgHQgEgGgBgIQgCgJAAgJIAAg1IAeAAIAAAwIABAHQAAAFABAEQACADADADQADACAGAAQAFAAADgCQAEgCACgDQACgEAAgEIABgJIAAgwIAeAAIAABgIgdAAIAAgNIAAAAIgEAGIgGAFIgIADQgEACgGAAQgLAAgHgEg");
	this.shape_6.setTransform(86.875,40.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AgOBLIAAiVIAdAAIAACVg");
	this.shape_7.setTransform(78.55,37.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AgRBNIAAhJIgUAAIAAgXIAUAAIAAgSQAAgIACgHQABgHAEgFQAEgGAHgDQAHgDAMAAIAJABIAJABIgCAZIgEgBIgFgBQgIAAgDADQgEAEAAAJIAAAQIAWAAIAAAXIgWAAIAABJg");
	this.shape_8.setTransform(72.425,37.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AgnBIQgIgDgIgFQgGgFgFgIQgEgIAAgLQAAgHACgGQADgGAEgFQAEgFAFgDIAMgGIgHgHIgEgHIgEgIIgBgJQAAgKAEgHQADgHAHgEQAGgEAIgCQAIgCAIAAQAJAAAGACQAHACAGAEQAGAEADAHQAEAGAAAJQAAAHgCAFQgDAGgDAEIgIAJIgKAGIASATIANgSIAjAAIgeAmIAgAiIgnAAIgLgOQgJAJgKAEQgJAEgNAAQgJAAgKgCgAgcAOIgEAEIgFAGIgBAHQAAAEACADIAEAFIAGAEIAHABQAHAAAGgDIAJgHIgZgcgAgWguQgDAEAAAGIABAFIACAFIAEAEIAEAEIAGgEIAEgEIAEgFIABgGQAAgGgDgDQgEgDgGAAQgGAAgEADg");
	this.shape_9.setTransform(55.45,38.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AgYBJQgIgEgHgGQgGgHgDgJQgEgKAAgLQAAgKADgJQADgIAGgIQAGgHAIgEQAIgEALAAQAIAAAIADQAIACAFAHIABAAIAAhAIAeAAIAACWIgcAAIAAgNIAAAAIgFAGIgHAFIgIADQgFACgEAAQgLAAgJgEgAgPAIQgHAHAAALQAAALAHAGQAGAHAKAAQAMAAAGgHQAGgGAAgLQAAgLgGgHQgGgHgMAAQgKAAgGAHg");
	this.shape_10.setTransform(34.975,37.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AgOBLIAAiVIAdAAIAACVg");
	this.shape_11.setTransform(26.4,37.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B3785").s().p("AgUAvQgKgEgHgGQgIgHgEgJQgEgKAAgLQAAgKAEgKQAEgKAIgGQAHgHAKgDQAKgEAKAAQALAAAKAEQAKADAHAHQAIAGAEAKQAEAKAAAKQAAALgEAKQgEAJgIAHQgHAGgKAEQgKAEgLAAQgKAAgKgEgAgRgRQgGAHAAAKQAAALAGAHQAHAGAKABQAMgBAFgGQAHgHAAgLQAAgKgHgHQgFgGgMgBQgKABgHAGg");
	this.shape_12.setTransform(17.7,40.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B3785").s().p("AgKAvQgKgEgHgGQgIgHgEgJQgEgKAAgLQAAgKAEgKQAEgKAIgGQAHgHAKgDQAKgEAKAAQAIAAAKADQAJADAHAHIgTAVQgDgDgEgDQgEgCgEAAQgLABgGAGQgGAHAAAKQAAALAGAHQAGAGALABQAFAAADgDIAHgFIATAVQgHAHgJADQgKADgIAAQgKAAgKgEg");
	this.shape_13.setTransform(7.175,40.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B3785").s().p("AgRBNIAAhJIgUAAIAAgXIAUAAIAAgSQAAgIACgHQABgHAEgFQAEgGAHgDQAHgDAMAAIAJABIAJABIgCAZIgEgBIgFgBQgIAAgDADQgEAEAAAJIAAAQIAWAAIAAAXIgWAAIAABJg");
	this.shape_14.setTransform(125.525,14.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B3785").s().p("AgUAvQgKgEgIgGQgGgGgFgKQgEgKAAgLQAAgKAEgKQAFgJAGgHQAIgHAKgDQAKgEAKAAQALAAAKAEQAKADAIAHQAGAHAFAJQAEAKAAAKQAAALgEAKQgFAKgGAGQgIAGgKAEQgKAEgLAAQgKAAgKgEgAgRgRQgGAHAAAKQAAALAGAGQAHAIAKAAQAMAAAFgIQAHgGAAgLQAAgKgHgHQgFgHgMAAQgKAAgHAHg");
	this.shape_15.setTransform(115.55,17.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B3785").s().p("AAAAMIgKANIgKgHIALgOIgSgGIAFgLIARAFIAAgSIAMAAIAAASIARgFIAEAMIgRAFIAKAOIgKAIg");
	this.shape_16.setTransform(100.425,8.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B3785").s().p("AgwBFIBQiRIARAJIhSCQgAAjBGQgHgDgGgFQgFgGgDgHQgDgHAAgJQAAgIADgHQADgHAFgGQAGgFAHgCQAHgDAIAAQAIAAAIADQAHACAFAFQAFAGAEAHQADAHAAAIQAAAJgDAHQgEAHgFAGQgFAFgHADQgIADgIAAQgIAAgHgDgAAlAUQgGAFAAAIQAAAJAGAFQAFAGAIAAQAIAAAGgGQAFgFAAgJQAAgIgFgFQgGgGgIAAQgIAAgFAGgAhBADQgHgDgFgFQgGgFgDgHQgDgHAAgJQAAgIADgHQADgHAGgGQAFgFAHgDQAHgDAJAAQAIAAAHADQAHADAGAFQAFAGADAHQADAHAAAIQAAAJgDAHQgDAHgFAFQgGAFgHADQgHADgIAAQgJAAgHgDgAg/guQgFAFAAAIQAAAIAFAGQAGAGAIAAQAIAAAFgGQAGgGAAgIQAAgIgGgFQgFgGgIAAQgIAAgGAGg");
	this.shape_17.setTransform(88.275,14.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B3785").s().p("AgfBIIAggzIgEABIgFABQgKAAgIgEQgIgEgGgGQgGgFgDgJQgDgIAAgKQAAgKAEgKQAEgIAHgHQAHgGAKgEQAKgDAKAAQALAAAKADQAJAEAHAGQAHAHAFAIQAEAKAAAKQAAAIgCAHIgDAKIgGALIgGALIgfAwgAgQglQgGAGAAAKQAAAKAGAFQAHAGAJAAQAKAAAGgGQAHgFAAgKQAAgKgHgGQgGgGgKgBQgJABgHAGg");
	this.shape_18.setTransform(73.375,14.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B3785").s().p("AgGARIgGgEIgEgGIgBgHQAAgDABgDIAEgGQADgDADgBIAGgBQAEAAADABQADABADADIAEAGQACADAAADIgCAHIgEAGIgGAEIgHABIgGgBg");
	this.shape_19.setTransform(64.45,20.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B3785").s().p("AgfBIIAggzIgEABIgFABQgKAAgIgEQgIgEgGgGQgGgFgDgJQgDgIAAgKQAAgKAEgKQAEgIAHgHQAHgGAKgEQAKgDAKAAQALAAAKADQAJAEAHAGQAHAHAFAIQAEAKAAAKQAAAIgCAHIgDAKIgGALIgGALIgfAwgAgQglQgGAGAAAKQAAAKAGAFQAHAGAJAAQAKAAAGgGQAHgFAAgKQAAgKgHgGQgGgGgKgBQgJABgHAGg");
	this.shape_20.setTransform(55.675,14.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B3785").s().p("AgfBIIAggzIgEABIgFABQgKAAgIgEQgIgEgGgGQgGgFgDgJQgDgIAAgKQAAgKAEgKQAEgIAHgHQAHgGAKgEQAKgDAKAAQALAAAKADQAJAEAHAGQAHAHAFAIQAEAKAAAKQAAAIgCAHIgDAKIgGALIgGALIgfAwgAgQglQgGAGAAAKQAAAKAGAFQAHAGAJAAQAKAAAGgGQAHgFAAgKQAAgKgHgGQgGgGgKgBQgJABgHAGg");
	this.shape_21.setTransform(43.875,14.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B3785").s().p("AgOBLIAAiVIAdAAIAACVg");
	this.shape_22.setTransform(29.4,14.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B3785").s().p("AgOBLIAAiVIAdAAIAACVg");
	this.shape_23.setTransform(24.2,14.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B3785").s().p("AgOBIIAAhfIAdAAIAABfgAgMgqQgEgFAAgIQAAgGAEgFQAGgFAGgBQAHABAGAFQAEAFABAGQgBAIgEAFQgGAFgHAAQgGAAgGgFg");
	this.shape_24.setTransform(19,14.75);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B3785").s().p("AAXBHIg5hDIAABDIgfAAIAAiNIAfAAIAAA7IA2g7IApAAIg+BCIBDBLg");
	this.shape_25.setTransform(10.175,14.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_03, new cjs.Rectangle(0,0,165.4,54.6), null);


(lib.copy_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AASA0IAAgyIgBgIQAAgFgCgEQgBgEgDgCQgEgDgGAAQgFAAgEADQgDACgCADQgCAEgBAFIgBAIIAAAzIgfAAIAAhlIAeAAIAAAOIABAAIAEgGIAGgFIAIgEQAFgBAFAAQAMAAAIADQAHAEAEAHQAEAGACAJQABAJAAAKIAAA3g");
	this.shape.setTransform(223.075,40.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgVAyQgLgEgHgHQgIgHgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAHgHALgEQAKgEALABQAMgBAKAEQAKAEAIAHQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAHQgIAHgKAEQgKAEgMAAQgLAAgKgEgAgSgRQgGAGAAALQAAALAGAIQAHAHALAAQAMAAAGgHQAHgIAAgLQAAgLgHgGQgGgIgMAAQgLAAgHAIg");
	this.shape_1.setTransform(210.575,40.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AgYAyQgLgCgIgJIATgUQAFAFAFADQAGADAHAAQAFgBAEgBQAEgCAAgEQAAgEgDgCIgJgDIgOgDQgGgCgGgDQgGgDgEgFQgEgGAAgJQAAgJAEgGQADgHAHgEQAFgFAIgBQAIgCAHAAQAKAAAKACQALADAGAIIgTATQgHgJgLAAQgDAAgEADQgDABAAAEQAAAFADACIAJACIANAEQAHABAGADQAGAEAEAEQAEAHAAAJQAAAKgFAGQgEAGgGAFQgIAEgIABQgIACgIAAQgKgBgLgDg");
	this.shape_2.setTransform(199.2,40.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AgaAzQgGgCgFgDQgFgFgDgFQgDgGAAgIQAAgJAEgGQADgGAFgDQAGgEAHgCQAHgDAIgBIAOgBIAOAAQAAgJgGgEQgGgFgIAAQgHAAgGADQgHADgFAGIgRgRQAKgJALgEQAMgDALAAQAOgBAKAEQAIADAFAHQAGAHACAJQACALAAAMIAAAzIgdAAIAAgNQgGAIgIAEQgIAEgJAAQgHgBgIgCgAgGAJQgFABgDADQgDADAAAFQAAAGAEADQAFACAGAAIAHgBIAIgDIAFgHQACgDAAgFIAAgHIgIAAIgJAAg");
	this.shape_3.setTransform(188.5,40.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgRAyQgKgEgIgHQgHgHgFgKQgEgKAAgMQAAgLAEgKQAFgKAHgHQAIgHAKgEQALgEAKABQALgBAJAEQAJAEAGAHQAHAHADAKQADAKAAALIAAAKIhIAAQACAJAGAFQAHAFAIABQAIgBAFgDQAFgEAEgFIAXAQQgIAKgMAFQgLAGgNAAQgKAAgLgEgAgHgcIgHAEIgEAGQgCADAAAEIApAAQAAgHgFgGQgGgGgJAAQgEAAgEACg");
	this.shape_4.setTransform(176.875,40.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgYAyQgLgCgHgJIASgUQAFAFAFADQAGADAHAAQAFgBAEgBQAEgCAAgEQAAgEgDgCIgJgDIgOgDQgGgCgGgDQgGgDgEgFQgEgGAAgJQAAgJAEgGQADgHAHgEQAFgFAIgBQAIgCAHAAQAKAAAKACQALADAGAIIgTATQgHgJgLAAQgDAAgEADQgDABAAAEQAAAFADACIAJACIANAEQAHABAGADQAGAEAEAEQAEAHAAAJQAAAKgFAGQgEAGgHAFQgHAEgIABQgIACgIAAQgKgBgLgDg");
	this.shape_5.setTransform(165.9,40.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgeAxQgHgEgEgHQgEgGgCgJQgBgJAAgKIAAg3IAfAAIAAAyIABAIIACAJQABAEADACQAEADAGAAQAFAAAEgDQADgCACgEIADgIIABgJIAAgyIAfAAIAABlIgeAAIAAgOIgFAGIgGAFIgIAEQgFABgFAAQgMAAgIgDg");
	this.shape_6.setTransform(148.625,40.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AgPBPIAAidIAfAAIAACdg");
	this.shape_7.setTransform(139.775,37.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AgSBRIAAhNIgVAAIAAgYIAVAAIAAgSQAAgJACgHQABgIAEgFQAFgGAGgDQAIgEANAAIAKABIAJABIgCAbIgFgCIgFAAQgIAAgDADQgEADAAALIAAAQIAXAAIAAAYIgXAAIAABNg");
	this.shape_8.setTransform(133.275,37.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AgpBLQgJgCgHgGQgIgGgFgIQgDgIAAgLQgBgIADgGQACgGAFgGIAKgIQAFgEAHgCIgHgIIgFgHIgDgJIgCgJQABgLAEgHQADgHAGgEQAHgFAJgCQAIgCAJAAQAIAAAHACQAIACAGAFQAGAEAEAHQADAHAAAJQAAAHgCAGIgGAKIgJAJIgLAHIATATIAPgSIAlAAIgfAoIAgAjIgoAAIgNgOQgIAKgLAEQgKAEgNAAQgKAAgKgDgAgdAPIgGAEIgDAGQgBADAAAEQAAAEABAEIAEAFQADADAEABQADABAFAAQAGAAAGgDQAFgDAEgFIgZgcgAgXgwQgEAEAAAGIABAFIADAFIAFAFIADAEIAGgEIAGgEIADgGQABgCAAgEQAAgGgDgEQgEgDgGAAQgHAAgEAEg");
	this.shape_9.setTransform(115.25,38.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AgZBMQgJgDgHgHQgGgIgEgJQgDgKAAgLQAAgLADgKQADgIAGgIQAGgIAJgEQAIgFALABQAJAAAJACQAIADAGAIIAAhDIAfAAIAACdIgdAAIAAgNIgFAFIgHAFIgJAEQgFACgEAAQgMgBgJgEgAgQAJQgHAGAAAMQAAALAHAIQAGAHALAAQAMAAAHgHQAGgIAAgLQAAgMgGgGQgHgIgMAAQgLAAgGAIg");
	this.shape_10.setTransform(93.575,37.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AgPBPIAAidIAfAAIAACdg");
	this.shape_11.setTransform(84.475,37.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B3785").s().p("AgVAyQgLgEgHgHQgIgHgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAHgHALgEQAKgEALABQAMgBAKAEQAKAEAIAHQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAHQgIAHgKAEQgKAEgMAAQgLAAgKgEgAgSgRQgGAGAAALQAAALAGAIQAHAHALAAQAMAAAGgHQAHgIAAgLQAAgLgHgGQgGgIgMAAQgLAAgHAIg");
	this.shape_12.setTransform(75.275,40.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B3785").s().p("AgLAyQgLgEgHgHQgIgHgEgKQgFgKABgMQgBgLAFgKQAEgKAIgHQAHgHALgEQAKgEALABQAJAAAKACQAKADAIAIIgVAWQgDgDgEgDQgEgCgFAAQgLAAgGAIQgHAGAAALQAAALAHAIQAGAHALAAQAGAAADgDIAHgFIAVAWQgIAHgKADQgKADgJABQgLAAgKgEg");
	this.shape_13.setTransform(64.1,40.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B3785").s().p("AgYAyQgLgCgIgJIATgUQAFAFAGADQAFADAHAAQAEgBAFgBQAEgCAAgEQAAgEgEgCIgIgDIgNgDQgHgCgGgDQgGgDgEgFQgEgGAAgJQAAgJAEgGQAEgHAFgEQAHgFAHgBQAIgCAHAAQAKAAALACQAJADAIAIIgUATQgGgJgMAAQgDAAgDADQgFABAAAEQAAAFAFACIAJACIAMAEQAHABAGADQAGAEAEAEQADAHABAJQgBAKgDAGQgFAGgHAFQgGAEgJABQgIACgHAAQgLgBgLgDg");
	this.shape_14.setTransform(47.4,40.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B3785").s().p("AgPBMIAAhlIAfAAIAABlgAgMgsQgFgFAAgIQAAgHAFgGQAGgFAGAAQAIAAAFAFQAFAGAAAHQAAAIgFAFQgFAFgIAAQgGAAgGgFg");
	this.shape_15.setTransform(39.725,38.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B3785").s().p("AASBPIAAgyIgBgJQAAgFgCgEQgBgEgDgCQgEgDgGAAQgFAAgEADQgDACgCADQgCAEgBAFIgBAJIAAAzIgfAAIAAidIAfAAIAABGIABAAIADgGIAGgFIAIgEQAFgBAFAAQAMAAAIADQAHAEAEAHQAEAGACAIQABAJAAAKIAAA4g");
	this.shape_16.setTransform(30.875,37.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B3785").s().p("AADBCQgGgCgFgDQgFgEgCgGQgDgGAAgJIAAgvIgVAAIAAgZIAVAAIAAgeIAeAAIAAAeIAcAAIAAAZIgcAAIAAAhIABAIQAAADACADQABACADABQADACAFAAIAHAAQAEgBACgCIAAAaIgLADIgLABQgIAAgHgCg");
	this.shape_17.setTransform(20.325,39.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B3785").s().p("AgYAyQgLgDgIgHIATgWQAFAGAFACQAGAEAHAAQAFAAAEgCQAEgBAAgFQAAgDgDgDIgJgDIgOgDQgGgCgGgDQgGgDgEgFQgEgGAAgJQAAgJAEgGQAEgHAGgFQAFgDAIgCQAIgCAHgBQAKABAKADQALADAGAHIgTATQgGgJgMAAQgDAAgEACQgDACAAAFQAAAEADACIAJACIANADQAHACAGAEQAGACAEAGQADAFABAKQAAAKgFAGQgEAGgHAFQgGAEgJABQgIABgHAAQgLAAgLgDg");
	this.shape_18.setTransform(238.45,17.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B3785").s().p("AgRAyQgKgEgIgHQgHgHgFgKQgEgKAAgMQAAgLAEgKQAFgKAHgHQAIgHAKgEQALgEAKAAQALAAAJAEQAJAEAGAHQAHAHADAKQADAKAAALIAAAKIhIAAQACAJAGAFQAHAGAIAAQAIAAAFgEQAFgDAEgGIAXAQQgIAKgMAFQgLAGgNgBQgKABgLgEgAgHgcIgHAEIgEAGQgCAEAAADIApAAQAAgHgFgGQgGgGgJAAQgEAAgEACg");
	this.shape_19.setTransform(227.475,17.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B3785").s().p("AASA0IAAgyIgBgIQAAgFgCgEQgBgEgDgCQgEgDgGAAQgFAAgEADQgDACgCADQgCAEgBAFIgBAIIAAAzIgfAAIAAhlIAeAAIAAAOIABAAIAEgGIAGgFIAIgEQAFgBAFAAQAMAAAIADQAHAEAEAHQAEAGACAJQABAJAAAKIAAA3g");
	this.shape_20.setTransform(215.325,17.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B3785").s().p("AgVAyQgLgEgHgHQgIgHgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAHgHALgEQAKgEALAAQAMAAAKAEQAKAEAIAHQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAHQgIAHgKAEQgKAEgMgBQgLABgKgEgAgSgSQgGAIAAAKQAAAMAGAGQAHAIALAAQAMAAAGgIQAHgGAAgMQAAgKgHgIQgGgHgMAAQgLAAgHAHg");
	this.shape_21.setTransform(202.825,17.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B3785").s().p("AgZBNQgJgEgHgHQgGgIgEgJQgDgJAAgMQAAgLADgKQADgJAGgHQAGgHAJgFQAIgFALAAQAJABAJADQAIADAGAHIAAhEIAfAAIAACeIgdAAIAAgNIgFAFIgHAFIgJAEQgFABgEAAQgMAAgJgDgAgQAIQgHAIAAALQAAAMAHAGQAGAIALAAQAMAAAHgIQAGgGAAgMQAAgLgGgIQgHgHgMAAQgLAAgGAHg");
	this.shape_22.setTransform(183.075,15.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B3785").s().p("AgRAyQgKgEgIgHQgHgHgFgKQgEgKAAgMQAAgLAEgKQAFgKAHgHQAIgHAKgEQALgEAKAAQALAAAJAEQAJAEAGAHQAHAHADAKQADAKAAALIAAAKIhIAAQACAJAGAFQAHAGAIAAQAIAAAFgEQAFgDAEgGIAXAQQgIAKgMAFQgLAGgNgBQgKABgLgEgAgHgcIgHAEIgEAGQgCAEAAADIApAAQAAgHgFgGQgGgGgJAAQgEAAgEACg");
	this.shape_23.setTransform(170.675,17.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B3785").s().p("AgPAzIgqhlIAiAAIAZBEIAYhEIAgAAIgpBlg");
	this.shape_24.setTransform(158.75,17.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B3785").s().p("AgVAyQgLgEgHgHQgIgHgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAHgHALgEQAKgEALAAQAMAAAKAEQAKAEAIAHQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAHQgIAHgKAEQgKAEgMgBQgLABgKgEgAgSgSQgGAIAAAKQAAAMAGAGQAHAIALAAQAMAAAGgIQAHgGAAgMQAAgKgHgIQgGgHgMAAQgLAAgHAHg");
	this.shape_25.setTransform(146.425,17.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B3785").s().p("AgPBPIAAidIAfAAIAACdg");
	this.shape_26.setTransform(137.175,15.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2B3785").s().p("AgjA0IAAhlIAgAAIAAARIAAAAQAEgKAHgFQAHgEALAAIAFAAIAFABIAAAcIgHgBIgGgBQgKAAgFADQgFACgDAFQgCAEAAAHIgBANIAAAqg");
	this.shape_27.setTransform(124.25,17.775);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2B3785").s().p("AgeAxQgHgEgEgHQgEgGgCgJQgBgJAAgKIAAg3IAfAAIAAAyIABAIIACAJQABAEADACQAEADAGAAQAFAAAEgDQADgCACgEIADgIIABgJIAAgyIAfAAIAABlIgeAAIAAgOIgFAGIgGAFIgIAEQgFABgFAAQgMAAgIgDg");
	this.shape_28.setTransform(113.425,18.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B3785").s().p("AgVAyQgLgEgHgHQgIgHgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAHgHALgEQAKgEALAAQAMAAAKAEQAKAEAIAHQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAHQgIAHgKAEQgKAEgMgBQgLABgKgEgAgSgSQgGAIAAAKQAAAMAGAGQAHAIALAAQAMAAAGgIQAHgGAAgMQAAgKgHgIQgGgHgMAAQgLAAgHAHg");
	this.shape_29.setTransform(100.925,17.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2B3785").s().p("Ag2BIIAEgZQAHADAIAAIAIgBIAGgEIAEgFIADgHIACgGIgthmIAiAAIAaBDIAAAAIAXhDIAgAAIguB1IgGAPQgDAGgEAEQgEAFgHACQgHACgMAAQgMAAgLgEg");
	this.shape_30.setTransform(88.575,20.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B3785").s().p("AADBCQgGgCgFgDQgFgEgCgGQgDgGAAgIIAAgwIgVAAIAAgZIAVAAIAAgfIAeAAIAAAfIAcAAIAAAZIgcAAIAAAhIABAIQAAADACADQABADADAAQADACAFAAIAHgBQAEAAACgCIAAAaIgLADIgLAAQgIAAgHgBg");
	this.shape_31.setTransform(71.925,16.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2B3785").s().p("AgLAyQgLgEgHgHQgHgHgFgKQgFgKAAgMQAAgLAFgKQAFgKAHgHQAHgHALgEQALgEAKAAQAJABAKADQAKADAIAHIgWAWQgBgDgFgCQgEgDgFAAQgLAAgGAHQgHAIAAAKQAAAMAHAGQAGAIALAAQAGAAADgCIAGgGIAWAWQgIAIgKACQgKADgJAAQgKABgLgEg");
	this.shape_32.setTransform(63.1,17.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2B3785").s().p("AgRAyQgKgEgIgHQgHgHgFgKQgEgKAAgMQAAgLAEgKQAFgKAHgHQAIgHAKgEQALgEAKAAQALAAAJAEQAJAEAGAHQAHAHADAKQADAKAAALIAAAKIhIAAQACAJAGAFQAHAGAIAAQAIAAAFgEQAFgDAEgGIAXAQQgIAKgMAFQgLAGgNgBQgKABgLgEgAgHgcIgHAEIgEAGQgCAEAAADIApAAQAAgHgFgGQgGgGgJAAQgEAAgEACg");
	this.shape_33.setTransform(51.525,17.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B3785").s().p("AADBCQgGgCgFgDQgFgEgCgGQgDgGAAgIIAAgwIgVAAIAAgZIAVAAIAAgfIAeAAIAAAfIAcAAIAAAZIgcAAIAAAhIABAIQAAADACADQABADADAAQADACAFAAIAHgBQAEAAACgCIAAAaIgLADIgLAAQgIAAgHgBg");
	this.shape_34.setTransform(40.975,16.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B3785").s().p("AgVAyQgLgEgHgHQgIgHgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAHgHALgEQAKgEALAAQAMAAAKAEQAKAEAIAHQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAHQgIAHgKAEQgKAEgMgBQgLABgKgEgAgSgSQgGAIAAAKQAAAMAGAGQAHAIALAAQAMAAAGgIQAHgGAAgMQAAgKgHgIQgGgHgMAAQgLAAgHAHg");
	this.shape_35.setTransform(30.425,17.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2B3785").s().p("AgjA0IAAhlIAfAAIAAARIABAAQAEgKAHgFQAHgEALAAIAFAAIAFABIAAAcIgHgBIgHgBQgIAAgFADQgGACgDAFQgBAEgCAHIgBANIAAAqg");
	this.shape_36.setTransform(20.1,17.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2B3785").s().p("Ag3BKIAAiTIA3AAQALAAAKACQAKACAIAFQAIAFAEAJQAFAIAAAOQAAANgFAJQgEAHgHAGQgHAFgLACQgKACgLAAIgXAAIAAA6gAgWgKIAWAAIAHgBIAHgDQAEgCACgEQACgDAAgFQAAgGgDgDQgDgEgEgCQgEgCgFAAIgIgBIgRAAg");
	this.shape_37.setTransform(9.2,15.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_02, new cjs.Rectangle(0,0,245.5,55.4), null);


(lib.copy_01c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AgXAjIABgLIADABIADAAIADAAIADgCIACgBIACgEIACgFIgUgwIAMAAIANAhIAMghIAMAAIgWA6IgDAGIgDADQgBACgDABIgHABIgJgBg");
	this.shape.setTransform(204.3,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgLAlQgEgCgEgEQgDgDgBgFQgCgEAAgGQAAgFACgFIAFgHQADgDAEgCQAEgCAFAAIAFABIAFACIADACIADACIAAghIAMAAIAABKIgLAAIAAgHIgBAAQgCAEgFACQgEACgEAAQgGAAgEgBgAgFAAIgEADIgDAFIgBAFIABAGIADAEIAEADQADACACAAQAEAAACgCIAFgDIACgEIABgGIgBgFIgCgFIgFgDQgCAAgEAAQgCAAgDAAg");
	this.shape_1.setTransform(198.325,8.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AgMAXIgFgEIgDgGIgBgHIAAgeIAMAAIAAAYIAAAEIABAFIADADQACACADAAIAEgBIADgDIACgEIABgEIAAgaIAMAAIAAAvIgMAAIAAgHQgBADgEADQgDACgFAAQgFAAgEgBg");
	this.shape_2.setTransform(192.375,9.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AAIAfIgIgBIgEgDIgCgFIgBgHIAAgWIgKAAIAAgKIAKAAIAAgOIALAAIAAAOIAOAAIAAAKIgOAAIAAAUQAAAFACABQABACAEAAIAEAAIADgBIAAAKIgFABg");
	this.shape_3.setTransform(187.425,8.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgKAYQgFgCgEgEIAIgIIAFAFQADABADAAIACAAIADgBIACgCIABgDQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgFgCIgFgBIgHgDIgEgCQgCgDAAgFQAAgDABgEIAFgEIAGgEIAGAAIAKACQAEABADAEIgIAIQgDgFgGgBIgEACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAAAABAAIADADIAHABIAGACQADABACACQACADAAAFQAAAEgCADIgFAFIgHADIgGAAQgGAAgEgBg");
	this.shape_4.setTransform(183.275,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgFAmIAAhLIALAAIAABLg");
	this.shape_5.setTransform(176.6,8.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgJAYQgFgDgEgDQgDgDgCgFQgCgFAAgFQAAgFACgEQACgFADgEQAEgCAFgCQAEgCAFAAQAGAAAEACQAFACADACQAEAEACAFQACAEAAAFQAAAFgCAFQgCAFgEADQgDADgFADQgEABgGAAQgFAAgEgBgAgFgMIgFADIgCAFIgBAEIABAGIACAEIAFADQADABACABQADgBADgBIAEgDIADgEIABgGIgBgEIgDgFIgEgDQgDgBgDAAQgCAAgDABg");
	this.shape_6.setTransform(172.15,9.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AAIAfIgIgBIgEgDIgCgFIgBgHIAAgWIgKAAIAAgKIAKAAIAAgOIALAAIAAAOIAOAAIAAAKIgOAAIAAAUQAAAFACABQABACAEAAIAEAAIADgBIAAAKIgFABg");
	this.shape_7.setTransform(167.025,8.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("AgKAYQgFgCgEgEIAIgIIAFAFQADABADAAIACAAIADgBIACgCIABgDQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAIgFgCIgFgBIgHgDIgEgCQgCgDAAgFQAAgDABgEIAFgEIAGgEIAGAAIAKACQAEABADAEIgIAIQgDgFgGgBIgEACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQABABAAAAQAAAAABAAIADADIAHABIAGACQADABACACQACADAAAFQAAAEgCADIgFAFIgHADIgGAAQgGAAgEgBg");
	this.shape_8.setTransform(162.875,9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AgFAkIAAgvIALAAIAAAvgAgFgWQgCgDAAgDQAAgCACgDQACgCADAAQADAAADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_9.setTransform(159.25,8.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AgOAYIAAgvIAMAAIAAAIQACgEACgDQAEgBAFAAIACAAIACAAIAAALIgDAAIgDgBQgEAAgCACIgDAEIgCAEIAAADIAAAYg");
	this.shape_10.setTransform(156.225,9.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AgZAjIAAhGIAbAAIAIACQADABADACQAEACACAEQABADAAAEQAAAGgDAFQgDAEgGABIAGABIAFAEIADAFIABAGQAAAGgCAEQgDAEgDACQgEADgEAAIgKABgAgNAYIAMAAIAEAAIAGgBIADgDQACgCgBgEQAAgFgDgDQgDgBgIAAIgMAAgAgNgFIAMAAQAFAAADgDQAEgCAAgEQAAgFgEgCQgDgCgGAAIgLAAg");
	this.shape_11.setTransform(150.85,8.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B3785").s().p("AgHAmIAAgmIgKAAIAAgJIAKAAIAAgHIABgJQABgDACgEQACgCACgCQAEgBAFAAIAIABIgBAKIgCgBIgDAAIgEABIgCACIgBADIgBAEIAAAIIALAAIAAAJIgLAAIAAAmg");
	this.shape_12.setTransform(142.675,8.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B3785").s().p("AgJAYQgFgDgDgDQgEgDgCgFQgCgFAAgFQAAgFACgEQACgFAEgEQADgCAFgCQAFgCAEAAQAFAAAFACQAFACADACQAEAEACAFQACAEAAAFQAAAFgCAFQgCAFgEADQgDADgFADQgFABgFAAQgEAAgFgBgAgFgMIgEADIgDAFIgBAEIABAGIADAEIAEADQACABADABQAEgBACgBIAEgDIADgEIABgGIgBgEIgDgFIgEgDQgCgBgEAAQgDAAgCABg");
	this.shape_13.setTransform(137.65,9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B3785").s().p("AgYAjIACgLIADABIADAAIADAAIADgCIACgBIACgEIACgFIgUgwIAMAAIANAhIAMghIANAAIgXA6IgDAGIgDADQgCACgCABIgIABIgJgBg");
	this.shape_14.setTransform(128.9,10.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B3785").s().p("AAIAfIgIgBIgEgDIgCgFIgBgHIAAgWIgKAAIAAgKIAKAAIAAgOIALAAIAAAOIAOAAIAAAKIgOAAIAAAUQAAAFACABQABACAEAAIAEAAIADgBIAAAKIgFABg");
	this.shape_15.setTransform(124.225,8.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B3785").s().p("AgFAkIAAgvIALAAIAAAvgAgEgWQgCgDAAgDQAAgCACgDQACgCACAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_16.setTransform(120.95,8.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B3785").s().p("AgKAYQgFgCgEgEIAIgIIAFAFQADABADAAIACAAIADgBIACgCIABgDQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgFgCIgFgBIgHgDIgEgCQgCgDAAgFQAAgDABgEIAFgEIAGgEIAGAAIAKACQAEABADAEIgIAIQgDgFgGgBIgEACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAAAABAAIADADIAHABIAGACQADABACACQACADAAAFQAAAEgCADIgFAFIgHADIgGAAQgGAAgEgBg");
	this.shape_17.setTransform(117.375,9.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2B3785").s().p("AgOAYIAAgvIAMAAIAAAIQACgEACgDQAEgBAFAAIACAAIACAAIAAALIgDAAIgDgBQgEAAgCACIgDAEIgCAEIAAADIAAAYg");
	this.shape_18.setTransform(113.425,9.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B3785").s().p("AgHAYQgFgDgEgDQgDgDgCgFQgCgFAAgFQAAgFACgEQACgFADgEQAEgCAFgCQAEgCAFAAQAFAAAEACQAEACADACQADAEACAFQABAEAAAGIAAADIgjAAQAAAGAEADQADADAFAAQAEAAADgCQADgCACgDIAJAHQgEAFgFACQgGACgFAAQgFAAgEgBgAAMgEQAAgFgDgDQgDgDgGAAQgEAAgDADQgEADAAAFIAXAAIAAAAg");
	this.shape_19.setTransform(108.275,9.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2B3785").s().p("AgFAYIgUgvIAOAAIALAgIAAAAIAOggIALAAIgSAvg");
	this.shape_20.setTransform(102.75,9.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B3785").s().p("AgFAkIAAgvIALAAIAAAvgAgFgWQgBgDAAgDQAAgCABgDQACgCADAAQADAAACACQACACABADQgBAEgCACQgCACgDAAQgDAAgCgCg");
	this.shape_21.setTransform(98.75,8.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2B3785").s().p("AAKAYIAAgYIAAgEIgBgEIgDgEQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgEABQAAAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAIgCAEIgBAEIAAAZIgMAAIAAgvIALAAIAAAIIABAAQABgDAEgDQADgDAFABQAFgBAEACIAFAEQACACABAEIABAHIAAAdg");
	this.shape_22.setTransform(94.525,9.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B3785").s().p("AgKAiQgFgCgEgDQgEgEgCgFQgCgFAAgHIAAgsIAMAAIAAAsIABAFIACAGIAGAEQADABADAAQAFAAADgBIAEgEQACgDABgDIABgFIAAgsIANAAIAAAsQAAAHgCAFIgGAJQgFADgFACQgFACgGABQgFgBgFgCg");
	this.shape_23.setTransform(87.95,8.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B3785").s().p("AgNAkIAQgaIAAAAIgDAAIgDABQgFAAgEgCQgEgCgCgDQgDgDgCgDQgBgEAAgFQAAgFACgFQABgEAEgDIAIgGQAEgBAFAAQAFAAAFABQAFACADAEQADADACAEQACAFAAAFQAAAFgCAGIgFAIIgSAcgAgEgXIgFADIgCAEIgBAGIABAEIACAFIAFABIAEABIAFgBIAEgBIACgFIABgEIgBgGIgCgEIgEgDIgFgBIgEABg");
	this.shape_24.setTransform(78.275,8.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B3785").s().p("AAEAjIAAg4IgMANIgHgJIAUgSIALAAIAABGg");
	this.shape_25.setTransform(71.575,8.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B3785").s().p("AAAAkIgEAAIgFgCQgDAAgCgDQgEgDgCgEQgCgEgBgGQgCgFABgJQgBgIACgFQABgGACgEQACgEAEgDIAFgDIAFgCIAEgBIAEABIAGACIAGADIAFAHIADAKIABANIgBAOIgDAKIgFAHIgGADIgGACgAgGgVQgDADgBADIgCAJIgBAGIABAIIACAIQABAEADADQADACADAAQAEAAADgCQADgDACgEIABgIIAAgIIAAgGIgBgJIgFgGQgDgDgEAAQgDAAgDADg");
	this.shape_26.setTransform(66.25,8.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2B3785").s().p("AgXAkIAAgNIAbgaIACgCIACgCIACgEIABgEIgBgDIgCgDIgDgCIgEgBQgEABgDACQgDACAAAFIgNgBIACgJQACgDAEgDQADgCAEgCQAEgBAEAAIAJABIAHAEIAFAGQACAEAAAFQAAAHgEAEIgHAJIgVAUIAgAAIAAALg");
	this.shape_27.setTransform(60.275,8.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2B3785").s().p("AgKAZIgGgDQgCgCgBgDQgCgDAAgDQAAgEACgDIADgEIAGgCIAGgCIAGAAIAHgBIACAAIAAgBQABgEgEgDQgDgCgFAAIgGABIgFAEIgHgHQAEgDAFgCQAGgCAEAAIAJABIAGADQADABAAADIACAFIABAEIAAAFIAAAaIgLAAIAAgHIAAAAQgCAEgEADQgFABgDAAIgHAAgAgCAEIgFACQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIABADIACACIADABIADAAQAEAAAEgCQACgEAAgFIAAgDIgCAAIgGAAIgEACg");
	this.shape_28.setTransform(51.35,9.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B3785").s().p("AAKAYIAAgYIAAgEIgBgEIgDgEQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgEABQAAAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAIgCAEIgBAEIAAAZIgMAAIAAgvIALAAIAAAIIABAAQABgDAEgDQADgDAFABQAFgBAEACIAFAEQACACABAEIABAHIAAAdg");
	this.shape_29.setTransform(42.825,9.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2B3785").s().p("AgJAYQgFgDgEgDQgDgDgCgFQgCgFAAgFQAAgFACgEQACgFADgEQAEgCAFgCQAEgCAFAAQAFAAAFACQAFACADACQAEAEACAFQACAEAAAFQAAAFgCAFQgCAFgEADQgDADgFADQgFABgFAAQgFAAgEgBgAgFgMIgFADIgCAFIgBAEIABAGIACAEIAFADQACABADABQADgBADgBIAFgDIACgEIABgGIgBgEIgCgFIgFgDQgDgBgDAAQgDAAgCABg");
	this.shape_30.setTransform(36.8,9.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2B3785").s().p("AgLAlQgEgCgEgEQgDgDgBgFQgCgEAAgGQAAgFACgFIAFgHQADgDAEgCQAEgCAFAAIAFABIAFACIADACIADACIAAghIAMAAIAABKIgLAAIAAgHIgBAAQgCAEgFACQgEACgEAAQgGAAgEgBgAgFAAIgEADIgDAFIgBAFIABAGIADAEIAEADQADACACAAQAEAAACgCIAFgDIACgEIABgGIgBgFIgCgFIgFgDQgCAAgEAAQgCAAgDAAg");
	this.shape_31.setTransform(27.325,8.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2B3785").s().p("AgHAYQgFgDgEgDQgDgDgCgFQgCgFAAgFQAAgFACgEQACgFADgEQAEgCAFgCQAEgCAFAAQAFAAAEACQAEACADACQADAEACAFQABAEAAAGIAAADIgjAAQAAAGAEADQADADAFAAQAEAAADgCQADgCACgDIAJAHQgEAFgFACQgGACgFAAQgFAAgEgBgAAMgEQAAgFgDgDQgDgDgGAAQgEAAgDADQgEADAAAFIAXAAIAAAAg");
	this.shape_32.setTransform(21.375,9.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2B3785").s().p("AgKAYQgFgCgEgEIAIgIIAFAFQADABADAAIACAAIADgBIACgCIABgDQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgFgCIgFgBIgHgDIgEgCQgCgDAAgFQAAgDABgEIAFgEIAGgEIAGAAIAKACQAEABADAEIgIAIQgDgFgGgBIgEACQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAAAABAAIADADIAHABIAGACQADABACACQACADAAAFQAAAEgCADIgFAFIgHADIgGAAQgGAAgEgBg");
	this.shape_33.setTransform(16.225,9.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B3785").s().p("AgKAZIgGgDQgCgCgBgDQgCgDAAgDQAAgEACgDIADgEIAGgCIAGgCIAGAAIAHgBIACAAIAAgBQAAgEgDgDQgDgCgEAAIgHABIgGAEIgGgHQAEgDAGgCQAFgCAEAAIAJABIAGADQACABACADIABAFIABAEIAAAFIAAAaIgLAAIAAgHIAAAAQgDAEgEADQgDABgFAAIgGAAgAgDAEIgEACQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIABADIACACIACABIAEAAQAEAAAEgCQACgEAAgFIAAgDIgCAAIgGAAIgFACg");
	this.shape_34.setTransform(11.1,9.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B3785").s().p("AgZAjIAAhGIAbAAIAIACQADABADACQAEACACAEQABADAAAEQAAAGgDAFQgDAEgGABIAGABIAFAEIADAFIABAGQAAAGgCAEQgDAEgDACQgEADgEAAIgKABgAgNAYIAMAAIAFAAIAEgBIAEgDQABgCAAgEQAAgFgDgDQgDgBgIAAIgMAAgAgNgFIAMAAQAFAAADgDQAEgCAAgEQAAgFgEgCQgDgCgGAAIgLAAg");
	this.shape_35.setTransform(5.4,8.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_01c, new cjs.Rectangle(0,0,209.2,17.7), null);


(lib.copy_01a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("Ag/BqIAAjTIAmAAIAACxIBZAAIAAAig");
	this.shape.setTransform(173.025,21.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("ABBBqIgUgwIhbAAIgTAwIgqAAIBcjTIAgAAIBbDTgAAgAZIgghVIghBVIBBAAg");
	this.shape_1.setTransform(153.425,21.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AghBnQgQgGgLgKQgMgMgGgPQgHgPAAgTIAAiGIAmAAIAACFQAAAHADAJQACAIAGAHQAFAIAJAEQAKAFAMAAQAOAAAIgFQAJgEAGgIQAFgHADgIQADgJgBgHIAAiFIAmAAIAACGQAAATgGAPQgHAPgLAMQgLAKgQAGQgQAGgSAAQgRAAgQgGg");
	this.shape_2.setTransform(131.8,21.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AgDBtQgYAAgWgIQgVgHgPgOQgQgPgJgUQgIgVAAgYQAAgYAIgUQAJgUAQgOQAOgOAVgIQAUgIAXAAQAVAAAVAIQAUAIAQAOQAPAOAJAUQAIAUABAYQAAAPgFANQgEAMgGALQgHAJgIAGIgPAMIAAABIA8AAIAAAegAglhEQgMAFgKAKQgKALgEANQgGANAAAQQAAAQAGANQAEAOALALQAJAKANAFQANAGAPAAQAPAAANgGQAOgFAJgKQAKgLAGgOQAFgNAAgQQAAgQgFgNQgGgNgKgLQgJgKgOgFQgNgGgPABQgPgBgOAGg");
	this.shape_3.setTransform(108.6,21.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AhIBqIAAjTICMAAIAAAiIhmAAIAAA0IBgAAIAAAhIhgAAIAAA6IBrAAIAAAig");
	this.shape_4.setTransform(86.775,21.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AAwBqIhoiiIgBAAIAACiIgmAAIAAjTIAzAAIBlCdIABAAIAAidIAmAAIAADTg");
	this.shape_5.setTransform(56.325,21.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("ABBBqIgUgwIhbAAIgTAwIgqAAIBcjTIAgAAIBbDTgAAgAZIgghVIghBVIBBAAg");
	this.shape_6.setTransform(33.575,21.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AgcBoQgVgIgOgPQgPgOgJgVQgIgUAAgZQAAgZAIgUQAJgVAPgPQAOgPAVgIQAVgIAXAAQAWAAASAIQATAIAQASIgeAWQgLgNgLgEQgLgEgLAAQgRAAgMAGQgOAFgJALQgKAKgFAOQgFAOAAAQQAAAQAFAOQAFAOAKALQAJAKAOAGQAMAGARAAQAMAAANgGQAMgGAKgNIAgAWQgPAUgVAJQgUAJgYAAQgXAAgVgIg");
	this.shape_7.setTransform(13.025,21.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_01a, new cjs.Rectangle(0,0,182,45), null);


(lib.copy_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AhIBqIAAjTICMAAIAAAiIhmAAIAAA0IBgAAIAAAhIhgAAIAAA6IBrAAIAAAig");
	this.shape.setTransform(134.275,21.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AhQBqIAAgiIBwiPIhuAAIAAgiICdAAIAAAiIhxCPIBzAAIAAAig");
	this.shape_1.setTransform(115.475,21.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AhIBqIAAjTICMAAIAAAiIhmAAIAAA0IBgAAIAAAhIhgAAIAAA6IBrAAIAAAig");
	this.shape_2.setTransform(97.675,21.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AhIBqIAAjTICMAAIAAAiIhmAAIAAA0IBgAAIAAAhIhgAAIAAA6IBrAAIAAAig");
	this.shape_3.setTransform(79.375,21.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AAwBqIhoiiIgBAAIAACiIgmAAIAAjTIAzAAIBlCdIABAAIAAidIAmAAIAADTg");
	this.shape_4.setTransform(57.775,21.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgpBpQgSgHgOgPIAdgcQAHALALAGQALAFANAAIAMgBQAHgCAFgEQAGgDADgGQADgFAAgIQAAgLgHgHQgIgGgLgEIgXgJQgNgDgLgHQgMgGgHgLQgHgMAAgSQAAgRAGgMQAHgMALgIQALgIAOgEQAOgEAOAAQARAAAPAGQAQAFANALIgcAdQgGgIgKgEQgKgEgLAAIgMABQgGACgFADQgFADgDAGQgDAFAAAHQAAALAIAGQAHAFALAEIAXAJQAOADALAHQALAGAHAMQAIALAAATQAAARgGANQgHAMgKAJQgLAIgOAEQgOAFgPAAQgUAAgSgHg");
	this.shape_5.setTransform(36.925,21.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AAMBqIAAiqIgmAlIgWgZIBAg1IAgAAIAADTg");
	this.shape_6.setTransform(8.85,21.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy_01, new cjs.Rectangle(0,0,145,45), null);


(lib.click = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#044F04").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.btn_cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARAkIgRgwIgPAwIgSAAIgZhHIATAAIAQAyIAAAAIAPgyIASAAIAQAyIAAAAIAPgyIASAAIgYBHg");
	this.shape.setTransform(87.025,20.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAjQgIgDgFgFQgFgFgDgGQgDgIAAgIQAAgHADgIQADgHAFgFQAFgEAIgDQAHgDAHAAQAIAAAHADQAIADAFAEQAFAFADAHQADAIAAAHQAAAIgDAIQgDAGgFAFQgFAFgIADQgHADgIAAQgHAAgHgDgAgIgTIgHAFIgEAHIgBAHIABAIIAEAHIAHAFQAEACAEAAQAFAAAEgCIAHgFIAEgHIABgIIgBgHIgEgHIgHgFQgEgCgFABQgEgBgEACg");
	this.shape_1.setTransform(76.475,20.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYA1Ig0hRIAABRIgTAAIAAhpIAZAAIAzBNIAAhNIATAAIAABpg");
	this.shape_2.setTransform(65.975,19.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkA0IADgQIAEABIAFABIAFgBIAEgCIACgDIADgFIADgJIgfhHIAUAAIAUAyIASgyIATAAIgiBXIgFAJIgEAGQgDACgFABQgEACgGAAQgHAAgHgCg");
	this.shape_3.setTransform(51.75,22.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAiQgFgCgDgEQgDgEgBgFQgCgFAAgGIAAgsIASAAIAAAkIABAGIABAHQACADACACQADACAEABQAEAAADgCIAFgEIADgGIABgGIAAgnIASAAIAABHIgRAAIAAgLIgBAAQgCAFgGAEQgFAEgHAAQgIAAgFgDg");
	this.shape_4.setTransform(43.55,20.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmA1IAAhpIAoAAIAMABQAGABAEAEQAFADADAFQADAGAAAGQAAAKgGAGQgFAFgIADQAFABAEABQAFACADAEQADADABAEQACAFAAAFQAAAIgDAGQgEAGgFADQgGAEgHABIgOACgAgTAlIARAAIAHgBIAHgCQAEgBACgDQACgDAAgGQAAgIgFgEQgGgDgKAAIgSAAgAgTgJIARAAQAIAAAFgDQAFgFAAgFQAAgIgFgCQgFgEgKAAIgPAAg");
	this.shape_5.setTransform(34.675,19.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DA3F55").s().p("AphDNIAAmZITDAAIAAGZg");
	this.shape_6.setTransform(61,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_cta, new cjs.Rectangle(0,0,122,41), null);


(lib.bg_lightblue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C7E6F4").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_lightblue, new cjs.Rectangle(0,0,300,250), null);


(lib.bg_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AoHTiMAAAgnDIQPAAMAAAAnDg");
	this.shape.setTransform(52,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_blue, new cjs.Rectangle(0,0,104,250), null);


(lib.spray_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.spray("synched",0);
	this.instance.setTransform(12.1,44,0.1793,0.1594,0,0,0,12,43.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:12.1,regY:44,scaleX:1,scaleY:1},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.3,88.1);


(lib.numbers_scrolling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhiCmIAAlLIDFAAIAAFLg");
	mask.setTransform(12.475,24.975);

	// Layer_1
	this.instance = new lib.numbers();
	this.instance.setTransform(12.5,-113.1,1,1,0,0,0,12.5,264.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:195.9},13).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,8.4,18.9,33.2);


(lib.hand_spray_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand_spray_png
	this.instance = new lib.hand_spray();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:true},1).wait(6).to({_off:false},0).wait(9).to({_off:true},1).wait(28));

	// spray_01_png
	this.instance_1 = new lib.spray_anim("synched",0);
	this.instance_1.setTransform(130.65,21.15,1,0.3428,0,0,0,72.7,44.1);
	this.instance_1.alpha = 0.5781;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(30).to({startPosition:0},0).to({_off:true},1).wait(6).to({_off:false,startPosition:1},0).wait(9).to({startPosition:1},0).to({_off:true},1).wait(28));

	// spray_01_png
	this.instance_2 = new lib.spray_anim("synched",0);
	this.instance_2.setTransform(134.65,21.15,1.0533,1.2976,0,0,0,72.8,44);
	this.instance_2.alpha = 0.5781;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(29).to({startPosition:2},0).to({_off:true},1).wait(6).to({_off:false,startPosition:0},0).wait(9).to({startPosition:0},0).to({_off:true},1).wait(28));

	// spray_01_png
	this.instance_3 = new lib.spray_anim("synched",0);
	this.instance_3.setTransform(130.65,21.15,1,1,0,0,0,72.7,44.1);
	this.instance_3.alpha = 0.5781;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(27).to({startPosition:0},0).to({_off:true},1).wait(6).to({_off:false,startPosition:1},0).wait(9).to({startPosition:1},0).to({_off:true},1).wait(28));

	// spray_01_png
	this.instance_4 = new lib.spray_anim("synched",0);
	this.instance_4.setTransform(130.65,21.15,1,1,0,0,0,72.7,44.1);
	this.instance_4.alpha = 0.5781;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(30).to({startPosition:0},0).to({_off:true},1).wait(6).to({_off:false,startPosition:1},0).wait(9).to({startPosition:1},0).to({_off:true},1).wait(28));

	// Layer_8
	this.instance_5 = new lib.spray_mist("synched",0);
	this.instance_5.setTransform(154.3,26.8,0.5267,0.5267,0,0,0,150,150.1);
	this.instance_5.alpha = 0.3398;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(27).to({startPosition:1},0).to({_off:true},1).wait(6).to({_off:false,startPosition:0},0).wait(9).to({startPosition:1},0).to({_off:true},1).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-70.7,245.4,242.7);


(lib.germs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_18 = new cjs.Graphics().p("AREDYIgNgFQgIgDgEgDQgEgDADgLIgNgZQgKgTANAIQANAIAHgDQAGgDgJgUQgJgUAKgEQAJgEAJAFQAFACABAQQAIgKAHAFQAKAJADAIQAGANgGAAIgGgBQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAJAKIAMALQADAHgBAGQgBAGgFADQgFADgGgCIgEgBIgDgBQgGgGgCABQgCABAAAFIABAIQAAAFgBABIgHADIgCAAIgGgBg");
	var mask_graphics_19 = new cjs.Graphics().p("AQgDxIgdgGQgRgEgIgFQgJgFAKgYQgIgMgRgjQgRgjAcAMQAcAMAQgIQAQgIgQgmQgQgmAXgKQAXgJAUAGQAJAEgBAfQAXgVAMAIQAXAPAFAPQAJAZgOACIgMAAQgGAAAAACQgBABAUAQQAWARACAEQAHAMgEANQgEANgNAHQgMAIgOgDIgKgCIgGgBQgNgJgFACQgEACAAAJIAAARQgBAKgEACQgLAHgGABIgIABIgKgBg");
	var mask_graphics_20 = new cjs.Graphics().p("AP8EKIgsgIQgagFgNgHQgNgHAQglQgLgQgYg0QgZg0ArARQArAQAZgMQAZgMgWg5QgXg3AkgPQAkgQAfAJQAOAEgDAuQAjggAUAMQAiAVAIAWQAMAlgWADIgSABQgKAAgBADQAAABAeAXQAgAYAEAGQAKARgIAUQgHAUgTAMQgUALgVgEIgPgCIgJgBQgUgNgIADQgGADgBAOIgBAZQgCAPgGAEQgSAKgJADQgHACgIAAIgOgBg");
	var mask_graphics_21 = new cjs.Graphics().p("APaEiIg8gKQgjgGgRgJQgSgJAWgwQgNgWgghEQgghEA5AVQA6AVAigRQAigRgdhIQgehKAxgWQAxgWAqAMQASAFgFA+QAxgsAaAQQAuAbAKAdQAQAvgfAGIgYABQgNAAgBAEQgBACAoAeQArAfAFAIQANAWgKAbQgKAagbAQQgbAPgcgFIgUgCIgNgBQgagRgLAFQgIAEgCASIgCAiQgCATgJAFQgZAPgMADQgKADgMAAIgQgBg");
	var mask_graphics_22 = new cjs.Graphics().p("AO3E6IhKgMQgsgGgWgLQgWgLAdg8QgRgcgnhTQgohVBIAaQBIAZArgVQArgWgkhaQgjhbA9gbQA+gcA0AOQAXAGgHBNQA+g3AgATQA6AhALAkQAUA8gmAHIgfACQgQAAgCAFQgBACAzAkQA1AmAGAKQAPAbgNAhQgMAhgiAUQgiATgjgFIgagCIgQgDQgggUgOAHQgLAEgCAXIgDAqQgDAYgLAHQgfARgQAFQgNAEgPAAQgJAAgLgBg");
	var mask_graphics_23 = new cjs.Graphics().p("AOWFRIhagNQg0gHgagNQgbgNAjhIQgUggguhkQgvhjBWAdQBWAdA0gZQAzgZgqhsQgqhsBKghQBKgiA/AQQAcAHgJBcQBKhCAnAWQBFAnANArQAXBHgtAJQgHABgeABQgTAAgDAHQgBACA8ArQBAAsAHAMQASAggPAoQgQAogoAXQgpAXgqgGIgfgCQgSgCgCgBQgmgXgRAHQgMAGgEAbIgEAyQgDAcgOAIQglAWgTAGQgQAFgSAAQgLAAgMgCg");
	var mask_graphics_24 = new cjs.Graphics().p("AN0FoIhogOQg8gJgfgOQgfgPAqhUQgYglg1hzQg2hyBlAiQBjAgA8gdQA9gegxh9Qgwh9BWgmQBXgnBJASQAgAIgLBqQBXhNAtAaQBPAsAQAyQAaBSg1ALQgIABgiABQgXABgDAHQgBADBFAxQBKAzAIAOQAWAlgTAuQgSAugvAbQgwAcgxgHIgkgDQgUgCgCgBQgtgbgTAJQgPAGgEAgIgFA6QgEAhgQAJQgsAZgWAHQgTAGgWAAQgMAAgOgCg");
	var mask_graphics_25 = new cjs.Graphics().p("ANUGSIh3gQQhEgJgjgRQgjgQAvhfQgagqg9iCQg8iBByAlQBxAkBFggQBEgjg2iNQg3iNBjgsQBigtBTAUQAlAJgNB4QBjhXAzAdQBbAyARA4QAeBdg9AMQgJACgnACQgaAAgDAJQgCADBPA3QBUA6AJAQQAYApgVA1QgVA0g2AfQg2Afg4gIIgogDQgYgBgCgBQgzgfgWAKQgRAHgFAkQgDAsgCAWQgFAlgTALQgxAcgZAIQgWAHgZAAQgOAAgPgCg");
	var mask_graphics_26 = new cjs.Graphics().p("AM0HBIiFgRQhNgLgmgSQgogTA2hpQgegvhDiRQhDiQB/ApQB/ApBNglQBMgng8idQg9ieBvgxQBugyBdAWQApAKgPCGQBvhiA6AgQBkA4AUA+QAhBohEAOQgKACgsACQgdAAgEAKQgBADBYA+QBeBAAKASQAbAugYA7QgYA6g8AjQg9Ajg/gJIgtgDQgagCgDgBQg4gigZALQgTAJgGAoQgDAxgDAYQgGApgVAMQg3AggcAJQgZAIgcAAQgQAAgQgCg");
	var mask_graphics_27 = new cjs.Graphics().p("AMUHvIiSgTQhVgLgrgUQgrgUA7h1QghgzhJigQhKifCMAtQCMAtBVgpQBVgrhCitQhDiuB6g2QB6g4BnAYQAtALgRCUQB7hsBAAjQBvA+AVBEQAkBzhLAPQgLACgwACQggABgFAKQgBAEBhBEQBnBGAMAUQAdAzgaBAQgbBBhDAmQhDAnhFgJIgygEQgdgBgDgCQg+glgbAMQgWAJgGAtQgEA2gDAaQgGAugXANQg+AkgfAJQgbAJggAAQgRAAgSgCg");
	var mask_graphics_28 = new cjs.Graphics().p("AL1IcIiggUQhcgMgvgWQgvgWBAiAQgjg3hQiuQhRiuCaAyQCZAwBcgtQBdgvhIi9QhIi9CFg8QCGg9BwAaQAxAMgTChQCHh1BFAmQB6BDAXBKQAnB9hSARQgMACg1ADQgjAAgFAMQgBAEBqBKQBxBNAMAVQAgA4gdBGQgdBGhJAqQhKArhLgKIg3gEQgfgCgEgCQhDgogeANQgYALgGAwQgFA7gEAcQgHAzgZAOQhDAngiALQgeAJgjAAQgSAAgUgCg");
	var mask_graphics_29 = new cjs.Graphics().p("ALXJIIitgVQhlgNgygYQg0gXBHiKQgng9hWi8QhXi7CmA1QCmA0BkgxQBlgzhOjMQhOjNCRhBQCQhCB6AdQA1AMgUCuQCSh/BLApQCDBIAZBRQArCHhZASQgNADg6ACQglABgGANQgCAEB0BQQB6BTANAXQAjA8ggBMQggBMhPAuQhQAuhRgLIg8gEQgigCgEgBQhJgsggAOQgaAMgHA0QgFBAgEAeQgIA3gbAQQhJAqglALQghALgmAAQgTAAgVgDg");
	var mask_graphics_30 = new cjs.Graphics().p("AK5J0Ii6gXQhsgOg3gZQg3gaBMiUQgphBhdjKQhejJCzA5QCzA3Bsg0QBtg3hUjbQhUjcCchGQCbhHCDAeQA5AOgWC7QCeiJBQAsQCOBNAaBXQAuCRhgAUQgOACg+ADQgoABgGAOQgCAFB8BVQCDBZAOAZQAlBAgiBSQgiBShVAxQhWAxhYgLIhAgEQgkgCgEgCQhPgvgjAQQgcAMgIA4QgFBFgEAhQgJA6gdARQhPAugnAMQgkAMgpAAQgVAAgWgDg");
	var mask_graphics_31 = new cjs.Graphics().p("AKcKeIjHgYQh0gOg6gbQg7gbBSifQgshFhkjXQhjjXC/A8QC/A7Bzg4QB0g6hZjqQhZjrCmhLQCnhMCMAgQA9AOgYDIQCpiSBVAvQCYBSAcBdQAwCbhmAUQgPADhCAEQgrABgHAOQgCAFCEBcQCMBeAQAbQAoBFglBXQglBXhbA1QhcA1hegMIhEgEQgngCgEgDQhVgyglARQgdANgJA8QgGBJgEAkQgJA+ggASQhUAxgqANQgmAMgtAAQgWAAgXgDg");
	var mask_graphics_32 = new cjs.Graphics().p("AJ/LIIjUgZQh6gPg+gdQg/gdBXioQgvhKhpjkQhqjlDLBAQDLA/B7g8QB8g+hfj4Qhfj6CxhPQCyhRCUAiQBBAPgaDUQC0ibBbAxQChBXAeBjQA0CkhtAWQgQAEhHADQguACgHAPQgCAFCNBhQCVBlAQAbQAqBKgnBcQgnBdhhA4QhiA5hjgNIhJgEQgqgDgEgCQhag1goASQgfAOgJA/QgGBOgFAmQgKBCghATQhaA0gtAOQgoANgwAAQgXAAgZgDg");
	var mask_graphics_33 = new cjs.Graphics().p("AJjLxIjggaQiCgRhBgdQhDgfBciyQgxhOhvjyQhvjxDWBEQDWBCCDhAQCDhBhkkHQhkkIC7hUQC8hWCdAkQBEAQgbDgQC/ikBgA0QCqBcAgBoQA2CuhzAYQgRADhKAEQgxABgHAQQgDAGCVBnQCdBqARAdQAtBOgpBiQgqBihmA7QhoA8hpgNIhNgFQgsgCgFgDQhfg4gqATQghAPgKBDQgGBSgGAoQgKBGgjAVQhfA2gwAQQgrAOgyAAQgZAAgagEg");
	var mask_graphics_34 = new cjs.Graphics().p("AJIMaIjtgcQiIgRhGggQhFggBhi8Qg0hRh1j/Qh1j+DiBHQDiBFCJhDQCKhFhpkVQhpkVDFhZQDGhaCmAlQBIARgdDsQDJitBmA3QCzBhAhBtQA5C3h5AZQgSAEhOAEQg0ACgIAQQgCAGCdBsQClBwASAfQAwBSgsBnQgsBnhsA/QhtA/hwgOIhRgFQgugCgFgDQhkg7gtAUQgiAQgKBGQgIBXgFAqQgLBKglAVQhkA6gzAQQgtAPg1AAQgaAAgbgDg");
	var mask_graphics_35 = new cjs.Graphics().p("AItNBIj5gdQiPgShJghQhJgiBmjFQg3hVh5kLQh8kLDtBKQDuBJCQhGQCRhJhukjQhvkjDQhdQDQhfCuAnQBMASgfD4QDTi2BrA6QC8BlAjBzQA8DAiAAaQgSAEhTAEQg2ACgIARQgDAHClBxQCuB1ATAhQAxBWguBsQguBshxBCQhzBCh1gOIhVgFQgxgDgFgCQhpg+gvAVQgkAQgLBKQgIBbgGAsQgLBOgnAWQhpA9g1ARQgwAPg4AAQgbAAgcgDg");
	var mask_graphics_36 = new cjs.Graphics().p("AISNnIkEgeQiWgShMgjQhLgjBqjOQg6hah/kXQiBkXD4BOQD4BMCYhKQCXhNhzkvQhzkxDZhhQDahkC2ApQBPASggEEQDdi/BwA9QDFBqAkB4QA/DJiGAbQgTAEhWAFQg5ACgJASQgCAHCsB2QC2B6AUAiQA0BagxByQgwBxh3BFQh4BFh6gPQgYgChCgDQgygDgGgDQhuhAgxAWQgmARgLBOQgIBfgHAuQgMBRgpAYQhuA/g3ASQgyAQg7AAQgcAAgegEg");
	var mask_graphics_37 = new cjs.Graphics().p("AH4ONIkPgfQidgThOgkQhQglBvjXQg7heiGkjQiGkjEEBRQECBPCehNQCehQh4k8Qh4k+DjhmQDjhoC/AqQBSATgiEPQDnjHB1A/QDNBvAmB9QBBDSiLAdQgUAEhaAFQg7ABgJAUQgDAHCzB7QC/CAAUAjQA2BegyB2QgzB2h8BIQh9BJiAgQQgYgChFgDQg1gDgGgDQhzhDgzAXQgoARgMBRQgIBkgHAwQgMBUgrAZQhzBDg6ASQg0ARg+AAQgdAAgfgEg");
	var mask_graphics_38 = new cjs.Graphics().p("AHfOyIkaghQikgThRgmQhTgmB0jgQg+hhiLkvQiMkvEOBUQENBTClhRQClhTh9lJQh9lLDshqQDthtDGAtQBWAUgjEaQDwjQB5BCQDWBzAoCCQBEDaiRAeQgWAFheAFQg9ACgJATQgDAIC7CAQDGCFAVAlQA4Bhg0B7Qg1B7iBBLQiDBMiFgRQgZgChIgDQg3gDgGgDQh4hGg1AYQgpATgNBUQgIBngHAyQgNBYgtAaQh3BFg9ATQg2AShBAAQgeAAgggEg");
	var mask_graphics_39 = new cjs.Graphics().p("AHGPWIklgiQiogUhWgnQhWgnB5jpQhBhliQk6QiSk7EZBXQEYBWCqhUQCshWiClWQiClXD2huQD2hxDOAuQBZAVglEkQD6jXB+BEQDeB3ApCHQBGDjiWAfQgWAFhiAFQhAACgJAVQgEAHDCCFQDOCKAWAmQA6Blg2CAQg3CAiGBOQiIBOiKgRQgagChLgDQg5gDgGgDQh8hJg3AZQgsATgMBYQgJBrgIA0QgNBbgvAbQh8BIg/AUQg4AShDAAQgfAAgigEg");
	var mask_graphics_40 = new cjs.Graphics().p("AGeP6IkwgjQivgWhZgoQhZgpB9jwQhChpiWlGQiWlGEjBbQEhBYCxhWQCyhaiGliQiHljD/hzQD+h0DWAvQBcAVgmEwQEDjfCDBGQDmB7AqCMQBJDricAgQgXAFhlAFQhCACgKAWQgEAIDJCJQDVCPAXAoQA9Bpg5CEQg4CEiMBRQiNBRiOgRQgcgChNgEQg7gDgHgDQiAhLg5AaQgtATgOBbQgJBvgIA2QgOBfgwAbQiABLhBAUQg7AUhGAAQggAAgigEg");
	var mask_graphics_144 = new cjs.Graphics().p("AGeP6IkwgjQivgWhZgoQhZgpB9jwQhChpiWlGQiWlGEjBbQEhBYCxhWQCyhaiGliQiHljD/hzQD+h0DWAvQBcAVgmEwQEDjfCDBGQDmB7AqCMQBJDricAgQgXAFhlAFQhCACgKAWQgEAIDJCJQDVCPAXAoQA9Bpg5CEQg4CEiMBRQiNBRiOgRQgcgChNgEQg7gDgHgDQiAhLg5AaQgtATgOBbQgJBvgIA2QgOBfgwAbQiABLhBAUQg7AUhGAAQggAAgigEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_graphics_18,x:114.1416,y:21.7192}).wait(1).to({graphics:mask_graphics_19,x:117.8186,y:24.2207}).wait(1).to({graphics:mask_graphics_20,x:121.4446,y:26.6897}).wait(1).to({graphics:mask_graphics_21,x:125.0142,y:29.1213}).wait(1).to({graphics:mask_graphics_22,x:128.5266,y:31.5144}).wait(1).to({graphics:mask_graphics_23,x:131.9816,y:33.8685}).wait(1).to({graphics:mask_graphics_24,x:135.379,y:36.1835}).wait(1).to({graphics:mask_graphics_25,x:138.7189,y:36.5086}).wait(1).to({graphics:mask_graphics_26,x:142.0012,y:36.2879}).wait(1).to({graphics:mask_graphics_27,x:145.2259,y:36.0711}).wait(1).to({graphics:mask_graphics_28,x:148.393,y:35.8581}).wait(1).to({graphics:mask_graphics_29,x:151.5024,y:35.649}).wait(1).to({graphics:mask_graphics_30,x:154.5542,y:35.4438}).wait(1).to({graphics:mask_graphics_31,x:157.5484,y:35.2425}).wait(1).to({graphics:mask_graphics_32,x:160.4849,y:35.045}).wait(1).to({graphics:mask_graphics_33,x:163.3638,y:34.8514}).wait(1).to({graphics:mask_graphics_34,x:166.185,y:34.6617}).wait(1).to({graphics:mask_graphics_35,x:168.9486,y:34.4758}).wait(1).to({graphics:mask_graphics_36,x:171.6545,y:34.2939}).wait(1).to({graphics:mask_graphics_37,x:174.3028,y:34.1158}).wait(1).to({graphics:mask_graphics_38,x:176.8934,y:33.9416}).wait(1).to({graphics:mask_graphics_39,x:179.4264,y:33.7712}).wait(1).to({graphics:mask_graphics_40,x:180.2504,y:38.1563}).wait(104).to({graphics:mask_graphics_144,x:180.2504,y:38.1563}).wait(1).to({graphics:null,x:0,y:0}).wait(45));

	// Layer_5
	this.instance = new lib.germs_group();
	this.instance.setTransform(156.5,130,1,1,0,0,0,210.5,142);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(126).to({_off:true},1).wait(45));

	// mask_idn (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_36 = new cjs.Graphics().p("AJANHQhpAEkwgWQkvgVC9iEQC+iEAKh9QAKh/k9gnQk+gnAXixQAXixB9hmQA3gtDOB2Qg2jWBrgyQC9hXB5AVQDMAigrBhQgGAOgnA6QgaAlALAMQAFAFC6hEQDFhHAnAAQBmAABKBJQBJBKAABmQAABohJBIIgxA4QgbAggGADQhtAugGAoQgEAfA9AlQBOAoAkAVQBAAnAAAjQAABfgMAqQgQA5g4A4IibCcQhaBbhEAkQgNAHgQAAQg/AAhkh1g");
	var mask_1_graphics_37 = new cjs.Graphics().p("AGyORQiSAFmlgbQmmgcEIipQEHioAPihQANiim5gyQm6gyAhjiQAfjkCuiDQBMg5EgCXQhLkSCUhAQEFhwCoAbQEbAsg7B8QgJASg2BKQgkAvAPAQQAHAGEDhWQERhcA2AAQCOAABmBeQBmBeAACDQAACFhmBeQgSASgxA2QgmAogIADQiYA8gIAzQgGAoBVAuQBsA0AzAbQBYAxAAAtQAAB6gRA2QgWBJhOBHIjXDJQh9BzhdAvQgTAJgWAAQhYAAiKiWg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AEsPXQi5AGoTghQoXghFOjMQFMjMATjCQARjDotg9Qovg8AqkQQAnkTDcifQBghEFsC2QhflLC8hNQFLiHDTAhQFlA1hKCVQgLAWhEBZQgvA5AUATQAIAHFIhoQFYhvBFAAQC0AACAByQCBByAACeQAACgiBByQgXAWg+BAQgwAxgJAEQjBBJgJA8QgIAwBrA4QCJA/A/AhQBwA7AAA2QAACTgWBBQgbBYhiBWQhzBlidCNQieCMh2A4QgYALgcAAQhvAAiui1g");
	var mask_1_graphics_39 = new cjs.Graphics().p("AE+RTQjdAGp7gmQp/gmGPjsQGNjtAXjhQAUjjqbhGQqchFAyk+QAvk/EHi4QBzhPGzDTQhxmADghZQGMieD+AnQGqA+hZCtQgNAZhSBnQg3BDAYAWQAJAIGIh5QGciABSAAQDXAACaCEQCaCDAAC4QAAC6iaCEQgcAZhKBLQg5A5gMAFQjmBUgLBIQgJA2CABBQCjBJBMAmQCGBFAAA/QAACqgaBMQghBmh1BkQiKB1i7CkQi+CiiNBBQgcANghAAQiFAAjRjSg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AFvTjQj/AHrdgrQrhgrHNkMQHKkLAaj/QAXkAsBhPQsDhOA6lnQA2loEwjQQCFhaH1DvQiDmyEDhlQHIixEmArQHrBGhnDDQgPAdheB1QhABLAcAZQAKAJHEiIQHciSBeAAQD4AACyCVQCyCVAADQQAADSiyCVQggAdhWBUQhCBAgNAGQkJBfgNBRQgLA9CUBKQC8BSBYArQCaBOAABHQAADAgeBWQgmBziHBxQifCFjYC4QjaC3ijBKQghAPgmAAQiaAAjwjtg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AGdVoQkfAIs4gwQs8gvIFkoQIDkoAdkaQAbkctghXQtihWBAmNQA9mPFVjmQCWhkIzEIQiTngEjhvQIBjFFJAwQIpBNh0DZQgRAfhqCBQhIBUAgAcQAMAKH7iXQIXihBpAAQEYAADHClQDICkAADnQAADojIClQgkAfhgBeQhLBHgOAGQkqBpgPBaQgMBECmBSQDUBbBjAvQCtBWAABPQAADVgiBfQgrB/iYB9QiyCTjzDMQj1DLi3BRQglAQgrAAQitAAkNkGg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AHHXkQk8AIuMgzQuRg0I6lDQI4lCAgkzQAdk1u4hfQu7heBImxQBCmzF5j6QCkhsJtEfQiioLFBh5QI1jWFrA0QJhBUiADsQgSAih1CNQhPBbAiAeQANALIwilQJNivB0AAQE0AADcC0QDcCzAAD7QAAD9jcCzQgoAjhqBmQhSBOgQAGQlJBzgQBhQgNBLC3BYQDpBkBtA0QC/BdAABWQAADoglBnQgwCLinCIQjECgkMDfQkODcjKBZQgpASgvAAQi+AAkpkeg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AHtZWQlWAJvag4Qveg4JrlaQJolbAilKQAglNwJhmQwMhlBNnRQBInUGZkOQCyh0KiE1QiwoyFciDQJljmGLA4QKUBbiKD9QgUAlh/CXQhWBiAmAhQAOALJfiwQJ/i9B/AAQFNAADvDBQDvDBAAEOQAAEQjvDBQgrAlhzBuQhZBTgSAHQlkB8gSBoQgOBRDGBfQD+BrB2A4QDPBkAABdQAAD5goBvQg0CVi2CTQjUCskjDvQkmDujaBfQgsATg0AAQjOAAlDkzg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AIRa+QlvAJwhg7Qwlg7KXlxQKUlxAllfQAilixThtQxWhsBTnvQBNnxG2kfQC/h8LSFJQi8pXF1iKQKRj1GmA7QLEBhiUENQgVAoiIChQhcBoAoAiQAPANKLi8QKsjJCIAAQFmAAEADOQEADNAAEfQAAEikADNQgvAoh7B0QhgBZgSAHQl+CEgTBvQgPBWDUBlQEQByB+A7QDeBrAABjQAAEIgrB3Qg3CfjDCbQjkC4k3D/Qk7D8jqBlQgvAVg3AAQjeAAlZlHg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AIxccQmGAKxgg/Qxlg+K/mFQK8mFAnlyQAkl2yWhyQyZhyBYoKQBSoNHQkuQDLiDL9FbQjHp3GLiSQK5kDHAA/QLvBmidEcQgXAqiQCpQhiBuArAlQAQANKyjHQLWjTCQAAQF7AAEQDYQEPDZAAEvQAAExkPDZQgxApiDB7QhmBegTAIQmWCKgTB2QgRBaDiBrQEgB4CGA/QDrBwAABoQAAEXguB+Qg6CnjOCkQjyDBlLENQlNEKj5BrQgyAVg6AAQjrAAlulYg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AJNdwQmZALyahCQyehBLjmXQLgmXApmEQAmmGzSh4QzWh3BdoiQBWolHok9QDViIMlFrQjSqVGgiZQLckOHXBBQMVBrilEpQgYAsiXCyQhnByAsAmQASAOLVjPQL7jeCXAAQGPAAEdDjQEdDjAAE8QAAFAkdDiQg0AsiJCAQhrBjgUAIQmqCRgVB6QgRBfDtBwQEuB9CNBCQD4B1AABuQAAEkgwCDQg+CvjZCsQj+DKlbEZQlfEWkFBwQg1AWg9AAQj2ABmClpg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AJme6QmqALzMhEQzRhEMCmnQL/mmArmTQAomW0Hh9Q0Kh7Bgo4QBao6H9lJQDeiONHF6QjbqvGyifQL7kZHrBFQM4BuisE1QgZAuieC4QhsB3AvAoQASAOL0jXQMcjmCeAAQGfAAEqDrQEpDsAAFJQAAFMkpDrQg2AtiPCGQhvBmgWAIQm8CXgWB/QgSBjD4B0QE7CCCTBFQECB5AAByQAAEvgyCJQhBC1jiCzQkJDSlqEkQltEhkRB1Qg3AXhAAAQkBAAmSl3g");
	var mask_1_graphics_48 = new cjs.Graphics().p("AJ8f6Qm5AMz4hGQz9hHMem0QMam0AtmgQAomj00iBQ04iABkpKQBdpMIPlUQDmiTNkGGQjirFHBikQMXkiH8BGQNVBziyE/QgaAvikC+QhvB7AwApQATAPMPjfQM4jtCjAAQGvAAE0DzQE0DzAAFUQAAFXk0DzQg4AviUCJQhzBqgWAIQnNCcgWCDQgTBmEBB4QFGCHCYBGQEMB+AAB1QAAE6g0CMQhDC8jqC4QkTDZl3EuQl6EqkaB4Qg5AYhCAAQkKAAmhmDg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EAKPAgxQnHAM0dhJQ0ihIM1nAQMynAAumrQAqmu1ciEQ1fiDBnpaQBgpcIeldQDtiWN+GQQjprYHOioQMukqILBIQNuB1i4FIQgbAwioDEQhyB+AxAqQAUAPMmjkQNQj0CoAAQG7AAE9D6QE9D5AAFdQAAFgk9D5Qg6AwiYCOQh3BsgXAJQnZCfgXCIQgTBoEHB7QFQCLCdBIQETCBAAB4QAAFCg2CQQhEDBjxC9QkbDfmBE2QmGEykiB8Qg7AYhEAAQkSAAmsmNg");
	var mask_1_graphics_50 = new cjs.Graphics().p("EAKeAhdQnRAM08hJQ1AhKNInKQNFnJAvm0QArm317iHQ1/iGBppnQBippIrlkQDyiaOTGZQjvrnHZisQNBkwIXBJQOCB4i8FPQgbAxisDIQh1CBAyArQAUAPM5jpQNjj5CsAAQHFAAFFD/QFED/AAFkQAAFnlED/Qg7AxicCQQh5BvgYAJQnkCjgYCKQgTBrENB9QFYCOCgBJQEaCEAAB7QAAFJg3CTQhGDFj2DBQkiDkmKE8QmPE5kpB+Qg8AZhFAAQkZAAm2mWg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EAKqAiAQnZAM1ThLQ1YhKNXnRQNTnRAvm8QAsm+2UiJQ2XiIBrpwQBkp0I0lqQD3icOiGfQjyrzHhivQNPk0IhBKQORB6i+FUQgcAyivDLQh4CDA0AsQAUAPNHjtQNzj9CvAAQHNAAFKEDQFKEDAAFqQAAFulKEDQg7AxifCTQh8BwgYAKQntClgYCNQgTBsESCAQFeCPCjBLQEeCGAAB9QAAFOg3CWQhIDIj6DEQknDnmRFCQmWE+kuCAQg9AZhHAAQkdAAm+mcg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EAKyAiZQnfAM1khMQ1phLNinXQNdnWAxnAQAsnD2liLQ2piKBsp3QBlp7I8luQD5idOuGjQj1r7HnixQNZk5IoBMQOdB7jCFYQgcAzixDNQh5CEA1AtQAUAPNRjvQN+kACxAAQHTAAFOEGQFOEGAAFuQAAFxlOEGQg8AzihCUQh9BygYAJQnzCngYCOQgVBuEWCBQFiCRClBMQEiCIAAB+QAAFSg4CXQhIDKj+DHQkqDqmXFFQmaFBkyCCQg+AahIAAQkgAAnEmhg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EAK3AinQniAN1uhMQ1zhMNonaQNjnZAxnDQAtnH2wiMQ20iKBtp8QBmp+JAlxQD7ifO1GnQj3sBHqiyQNgk7IsBNQOjB7jCFbQgdAziyDOQh6CGA1AsQAUAQNYjxQOEkCCzAAQHWAAFREIQFQEIAAFwQAAF0lQEIQg9AyiiCWQh+BygYAKQn3CogZCPQgUBuEYCDQFlCSCmBMQEkCJAAB/QAAFUg5CYQhJDLj/DJQksDrmaFHQmeFEk0CCQg+AahIAAQkjAAnHmkg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EAK5AisQnkAN1xhMQ13hNNqnaQNmnbAxnEQAtnH2ziMQ24iLBup9QBlqAJClyQD8ifO3GnQj4sCHsiyQNik8ItBNQOmB8jDFbQgdAzizDPQh6CGA1AsQAUAQNajyQOHkCCyAAQHYAAFREJQFSEIAAFxQAAF1lSEIQg9AziiCWQh+BygZAKQn4CpgYCPQgUBuEYCDQFmCSCnBNQEkCJAAB/QAAFVg5CZQhJDMkADIQktDsmaFIQmfFFk1CCQg+AahJAAQkjAAnImlg");
	var mask_1_graphics_144 = new cjs.Graphics().p("EAK5AisQnkAN1xhMQ13hNNqnaQNmnbAxnEQAtnH2ziMQ24iLBup9QBlqAJClyQD8ifO3GnQj4sCHsiyQNik8ItBNQOmB8jDFbQgdAzizDPQh6CGA1AsQAUAQNajyQOHkCCyAAQHYAAFREJQFSEIAAFxQAAF1lSEIQg9AziiCWQh+BygZAKQn4CpgYCPQgUBuEYCDQFmCSCnBNQEkCJAAB/QAAFVg5CZQhJDMkADIQktDsmaFIQmfFFk1CCQg+AahJAAQkjAAnImlg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_1_graphics_36,x:120.0305,y:95.6025}).wait(1).to({graphics:mask_1_graphics_37,x:130.0165,y:106.3038}).wait(1).to({graphics:mask_1_graphics_38,x:139.4319,y:116.3936}).wait(1).to({graphics:mask_1_graphics_39,x:133.8185,y:120.0589}).wait(1).to({graphics:mask_1_graphics_40,x:125.421,y:120.7231}).wait(1).to({graphics:mask_1_graphics_41,x:117.6027,y:121.3415}).wait(1).to({graphics:mask_1_graphics_42,x:110.3635,y:121.9141}).wait(1).to({graphics:mask_1_graphics_43,x:103.7035,y:122.4409}).wait(1).to({graphics:mask_1_graphics_44,x:97.6226,y:122.9218}).wait(1).to({graphics:mask_1_graphics_45,x:92.1208,y:123.357}).wait(1).to({graphics:mask_1_graphics_46,x:87.1981,y:123.7463}).wait(1).to({graphics:mask_1_graphics_47,x:82.8546,y:124.0899}).wait(1).to({graphics:mask_1_graphics_48,x:79.0903,y:124.3876}).wait(1).to({graphics:mask_1_graphics_49,x:75.905,y:124.6396}).wait(1).to({graphics:mask_1_graphics_50,x:73.2989,y:124.8457}).wait(1).to({graphics:mask_1_graphics_51,x:71.2719,y:125.006}).wait(1).to({graphics:mask_1_graphics_52,x:69.8241,y:125.1205}).wait(1).to({graphics:mask_1_graphics_53,x:68.9554,y:125.1892}).wait(1).to({graphics:mask_1_graphics_54,x:75.5764,y:129.6703}).wait(90).to({graphics:mask_1_graphics_144,x:75.5764,y:129.6703}).wait(1).to({graphics:null,x:0,y:0}).wait(45));

	// Layer_10
	this.instance_1 = new lib.germs_group();
	this.instance_1.setTransform(156.5,130,1,1,0,0,0,210.5,142);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).wait(108).to({_off:true},1).wait(45));

	// mask_idn (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("AGoIXQgSABg2gEQg2gDAigYQAhgXACgXQACgWg4gHQg5gHAEgfQAEggAXgSQAJgIAlAVQgKgmATgJQAigPAVAEQAkAGgHARIgIANQgFAGACACQABABAhgMQAjgMAHAAQASgBANAOQANANAAASQAAASgNANIgJAKIgFAGQgUAIgBAHQgBAGALAGIAUALQAMAHAAAGQAAARgCAIQgDAKgKAKIgcAbQgQAQgMAHIgFABQgLAAgSgVg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AGVImQgYAAhEgEQhFgFArgeQArgeACgcQADgchIgJQhIgJAGgoQAFgoAcgXQAMgKAvAbQgMgxAYgLQAqgUAcAFQAtAIgJAWIgKAQQgGAIACADQABABAqgPQAtgQAIAAQAYAAAQAQQARARAAAXQAAAXgRARIgLAMIgHAIQgZALgBAJQgBAHAOAIIAZAOQAPAIAAAIQAAAWgDAJQgEANgMANIgjAjQgUAUgQAIQgDACgDAAQgPAAgWgag");
	var mask_2_graphics_3 = new cjs.Graphics().p("AGCI0QgdABhSgGQhTgGAzgkQA0gkADgiQADgjhXgKQhXgLAHgwQAGgxAigcQAPgMA4AgQgOg6AdgOQAzgXAhAFQA4AKgMAaIgMAUQgHAKADADQABABAzgSQA1gUALAAQAcAAAUAUQAUAUAAAcQAAAdgUAUIgNAPIgJAJQgeANgBALQgCAIARAKIAfARQARALABAJQAAAagEAMQgEAPgPAPIgrArQgYAZgTAKQgDACgFAAQgRAAgbggg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AFvJBQghAChhgHQhigHA9gqQA9gqADgoQADgphlgMQhmgNAHg4QAHg5ApghQARgOBCAmQgRhFAigQQA8gcAnAHQBBALgNAfIgPAXQgIAMADAEQACABA8gVQA+gXANAAQAhAAAXAXQAYAYAAAgQAAAigYAXIgPASIgLALQgjAPgCANQgBAJATAMIAlAUQAUAMAAALQAAAfgEANQgFASgSASIgxAyQgdAdgVAMQgFACgFAAQgUAAgggmg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AFdJPQgnABhvgHQhvgIBFgwQBFgxAEguQAEguh0gOQh1gOAJhBQAIhBAugmQAUgQBMArQgUhOAngSQBFggAtAHQBKANgQAjQgCAFgOAWQgKANAEAFQACABBEgYQBIgbAOAAQAmAAAbAbQAbAbAAAmQAAAmgbAbIgSAUIgMANQgoARgCAOQgCAMAXANIAqAXQAXANAAANQAAAjgFAQQgGAUgUAVIg5A5QghAhgYANQgFADgGAAQgXAAgkgrg");
	var mask_2_graphics_6 = new cjs.Graphics().p("AFKJdQgrABh9gJQh+gIBPg3QBOg2AEg0QAEg0iDgQQiCgQAKhJQAJhJAzgqQAWgSBWAwQgXhYAtgUQBNglAyAJQBUAOgSAoQgCAGgQAYQgLAPAFAFQABACBNgcQBRgdAQAAQAqAAAfAeQAeAeAAAqQAAArgeAeIgUAXQgMANgCABQgtAUgCAQQgCANAZAPIAvAZQAaAQAAAPQAAAngFARQgGAXgXAXIhABBQglAlgcAPQgFADgHAAQgaAAgpgwg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AE4JqQgwACiLgKQiKgKBWg8QBWg8AFg6QAFg5iRgSQiRgSALhRQAKhRA5gvQAagUBdA2QgZhiAxgXQBXgnA3AJQBdAPgTAtQgDAGgSAaQgMARAFAGQACACBVgfQBaghASAAQAvAAAhAiQAiAiAAAuQAAAwgiAhIgWAaQgMAOgDACQgyAVgCASQgCAOAcARIA0AcQAdASAAAQQAAArgGAUQgHAZgaAaIhGBHQgqAqgeAQQgHAEgHAAQgdAAgtg2g");
	var mask_2_graphics_8 = new cjs.Graphics().p("AEmJ3Qg1ACiYgLQiYgKBfhCQBfhCAFhAQAFg/ifgUQifgTAMhZQALhZA/g0QAbgWBnA7QgbhrA2gYQBegsA9ALQBmARgVAvQgDAIgUAcQgNATAGAGQACACBeghQBigkAUAAQAzAAAlAlQAlAkAAA0QAAA0glAlIgYAcQgOAQgDABQg3AYgDATQgCAQAfASIA5AfQAgATAAASQAAAwgGAVQgIAcgcAcIhOBPQgtAtgiASQgHAEgHAAQggAAgyg7g");
	var mask_2_graphics_9 = new cjs.Graphics().p("AEUKEQg5ACimgLQilgMBohIQBmhIAGhEQAFhFisgWQiugVANhhQAMhhBFg4QAegYBxBAQgehzA6gbQBmgwBDALQBvATgXA1QgEAIgVAeQgPAUAHAHQACACBmgkQBrgmAVAAQA4AAApAnQAoAoAAA4QAAA4goAoIgbAfQgPARgDACQg8AZgDAWQgCARAhAUIA/AhQAiAVAAAUQAAAzgGAXQgJAfgfAfIhUBVQgxAxglAUQgHAEgJAAQgjAAg2hAg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AEDKRQg+ACizgMQizgNBwhNQBvhOAGhKQAGhLi6gXQi8gXAOhoQANhpBKg8QAhgZB6BEQggh9A/gdQBug0BHAMQB4AVgZA5QgDAIgXAiQgQAVAHAHQACADBvgnQBzgqAXAAQA9AAArArQArAqAAA9QAAA9grArIgdAhQgQATgDABQhBAcgDAYQgCASAkAVQAuAYAVANQAlAWAAAVQAAA4gHAZQgJAhghAhIhbBcQg2A2gnAVQgIAEgJAAQgmAAg6hFg");
	var mask_2_graphics_11 = new cjs.Graphics().p("ADxKeQhCACi/gNQjBgOB5hTQB2hTAHhQQAGhQjIgZQjJgYAPhwQAOhxBPg/QAjgcCDBJQgiiGBEggQB2g3BNANQCAAWgbA9QgEAJgYAkQgRAYAHAIQADADB2grQB8gtAZAAQBBAAAuAuQAvAvAAA/QAABCgvAuIgeAkQgSAUgDACQhFAdgEAZQgDAUAnAXQAxAaAXANQAoAYAAAXQAAA7gHAbQgKAkgkAjIhiBjQg5A5gqAXQgJAFgKAAQgoAAg/hKg");
	var mask_2_graphics_12 = new cjs.Graphics().p("ADgKrQhHACjMgOQjNgPCAhZQCAhZAGhUQAHhWjWgaQjXgaARh4QAOh4BVhEQAlgeCMBPQgkiQBIgiQB+g7BSAPQCJAXgcBBQgFAKgaAmQgSAZAIAJQADADB+guQCFgwAaAAQBFAAAyAyQAxAxAABEQAABGgxAyIghAlQgTAWgDACQhKAfgEAbQgDAVApAZQA1AbAYAPQArAZAAAYQAABAgIAdQgLAmglAmIhpBpQg9A9gtAZQgJAFgLAAQgrAAhDhPg");
	var mask_2_graphics_13 = new cjs.Graphics().p("ADPK3QhLADjZgQQjagPCIheQCIhfAIhaQAHhbjkgcQjkgcARh+QAQh/BahKQAngfCVBUQgniZBNgkQCGg/BXAPQCSAZgfBFQgEALgcApQgTAaAIAJQADADCGgwQCNgzAcAAQBJAAA1A0QA1A1AABKQAABJg1A1IgjAoQgUAWgDACQhPAigEAcQgDAXAsAaQA4AdAaAPQAtAbAAAaQAABEgJAeQgLApgoAoIhvBwQhBBBgwAaQgKAFgLAAQguAAhHhUg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AC/LDQhQADjlgQQjngQCQhkQCQhkAIhgQAHhfjxgeQjxgeASiGQARiGBfhNQApgiCdBZQgoiiBRgmQCPhCBbAQQCaAaggBJQgFALgdAsQgVAcAJAJQADAECOgzQCVg3AeAAQBNAAA4A4QA4A4AABNQAABOg4A4IglAqQgVAYgEACQhTAkgEAeQgDAXAuAcQA7AfAcAQQAwAdAAAaQAABIgJAgQgNArgqArIh1B2QhFBFgzAbQgKAGgMAAQgwAAhLhZg");
	var mask_2_graphics_15 = new cjs.Graphics().p("ACuLPQhUADjxgRQj0gRCYhpQCYhqAIhkQAIhlj+gfQj/gfAUiOQARiNBlhSQAsgjClBeQgrirBVgoQCXhGBgARQCjAcgiBNQgFALgfAuQgWAeAKAKQADADCVg2QCdg5AfAAQBSAAA7A7QA7A6AABSQAABSg7A7IgnAsQgWAagEACQhYAmgEAfQgDAZAwAdQA/AhAdARQAzAeAAAcQAABMgKAiQgNAtgtAtIh7B9QhJBIg1AdQgLAGgNAAQgyAAhQheg");
	var mask_2_graphics_16 = new cjs.Graphics().p("ACeLbQhYADj+gSQkAgRCghvQCfhvAJhpQAIhrkLggQkLghAUiUQATiVBphWQAuglCuBjQgti0BagqQCehJBlASQCqAdgjBRQgFALghAxQgWAfAJAKQAEAECdg4QClg9AgAAQBWAAA+A+QA+A+AABWQAABXg+A8IgpAvQgXAbgEACQhcAogFAhQgEAaA0AfQBBAiAfASQA1AfAAAeQAABQgKAjQgOAwgvAvIiCCDQhLBMg5AeQgLAGgNAAQg2AAhThig");
	var mask_2_graphics_17 = new cjs.Graphics().p("ACOLnQhdADkJgTQkMgSCnh0QCnh0AJhvQAJhvkYgiQkYgiAVicQAUibBuhbQAwgmC2BnQgvi8BegsQCmhNBpATQCzAeglBVQgFAMgjAzQgXAhAKALQAEADCkg7QCtg/AiAAQBaAABBBBQBBBAAABbQAABbhBA/IgrAxQgYAcgFADQhgApgFAjQgEAbA2AgQBFAkAfATQA4AhAAAfQAABTgKAmQgOAxgxAxIiJCKQhPBQg7AfQgMAHgOAAQg4AAhXhng");
	var mask_2_graphics_18 = new cjs.Graphics().p("ACLLzQhgADkWgUQkYgTCvh5QCuh5AKh0QAJh0kkgkQklgkAWiiQAViiBzhfQAygoC/BsQgyjFBigtQCthRBwAUQC6AfgnBZQgGANgkA1QgYAiAKALQAEAECsg9QC0hCAkAAQBeAABEBDQBDBEAABeQAABfhDBCIgtA0QgZAdgFACQhlArgFAlQgEAcA4AiQBIAlAhAUQA7AjAAAgQAABXgMAnQgOA0gzAzIiPCQQhTBTg9AhQgNAHgOAAQg7AAhbhrg");
	var mask_2_graphics_19 = new cjs.Graphics().p("ACRL+QhlADkhgUQkjgUC2h+QC1h/AKh4QAJh5kwglQkxgmAXioQAViqB5hiQA0grDGBxQgzjNBmgvQC1hUB0AUQDBAhgoBcQgGAOglA3QgaAkALALQAEAFCzhBQC8hEAlAAQBjAABGBGQBGBGAABiQAABkhGBGIgvA0QgaAfgFACQhpAtgFAmQgEAeA6AjQBLAnAiAUQA9AkAAAiQAABbgLAoQgQA3g1A1IiUCWQhXBWhAAjQgNAHgPAAQg9AAhfhwg");
	var mask_2_graphics_20 = new cjs.Graphics().p("ACXMJQhpAEktgVQkvgVC+iEQC8iDALh9QAJh+k8gnQk9gmAYiwQAWixB9hmQA2gsDPB1Qg2jVBqgxQC8hXB5AVQDJAigqBgQgGAOgnA6QgaAlALAMQAEAEC6hDQDEhHAmAAQBnAABJBJQBJBJAABmQAABnhJBKIgxA2QgbAggFACQhtAvgGAoQgEAeA9AlQBNAoAkAVQBAAmAAAjQAABfgNAqQgQA4g3A4IiaCcQhaBZhDAkQgNAIgQAAQg/AAhjh1g");
	var mask_2_graphics_21 = new cjs.Graphics().p("ACdMUQhtAEk5gWQk6gWDFiIQDDiIALiCQAKiDlIgoQlJgoAZi2QAXi3CBhrQA5gtDWB5Qg4jdBvgzQDChaB+AVQDRAkgsBkQgGAOgpA8QgbAmAMANQAEAEDBhFQDLhKAoAAQBqAABMBMQBMBMAABqQAABrhMBMIgyA4QgcAhgGADQhxAwgGApQgEAgA/AmQBQAqAmAWQBBAnAAAlQAABhgMAsQgRA7g5A5IigCiQheBdhFAmQgOAHgQAAQhCAAhmh5g");
	var mask_2_graphics_22 = new cjs.Graphics().p("ACiMfQhwAElEgXQlGgWDMiNQDKiNAMiHQAKiHlUgqQlUgqAZi8QAYi+CGhuQA7gvDdB+Qg5jlByg1QDKheCCAXQDYAkgtBoQgHAPgpA9QgdAoAMANQAFAFDIhIQDShNAqAAQBuAABOBPQBPBPAABtQAABvhPBPIg0A6QgdAigGADQh1AygGArQgFAhBCAnQBTAsAnAWQBEApAAAmQAABlgNAuQgRA8g8A8IimCnQhgBhhIAnQgPAHgRAAQhEAAhqh9g");
	var mask_2_graphics_23 = new cjs.Graphics().p("ACoMyQh1AElOgYQlRgXDSiSQDSiSAMiLQAKiMlfgrQlhgrAbjDQAYjFCLhxQA9gxDlCCQg8jtB3g3QDQhgCGAXQDhAmgvBrQgHAQgrA/QgeApANAOQAFAFDPhKQDZhQArAAQBxAABSBSQBRBRAABxQAABzhRBRQgPAQgnAuQgeAigGADQh6A0gGAsQgFAiBEAoQBWAtAoAYQBHAqAAAnQAABpgOAvQgSA+g9A+IisCtQhjBkhLAoQgPAIgRAAQhGAAhuiBg");
	var mask_2_graphics_144 = new cjs.Graphics().p("ACoMyQh1AElOgYQlRgXDSiSQDSiSAMiLQAKiMlfgrQlhgrAbjDQAYjFCLhxQA9gxDlCCQg8jtB3g3QDQhgCGAXQDhAmgvBrQgHAQgrA/QgeApANAOQAFAFDPhKQDZhQArAAQBxAABSBSQBRBRAABxQAABzhRBRQgPAQgnAuQgeAigGADQh6A0gGAsQgFAiBEAoQBWAtAoAYQBHAqAAAnQAABpgOAvQgSA+g9A+IisCtQhjBkhLAoQgPAIgRAAQhGAAhuiBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:53.5008,y:55.6147}).wait(1).to({graphics:mask_2_graphics_2,x:54.5641,y:57.5948}).wait(1).to({graphics:mask_2_graphics_3,x:55.6153,y:59.5523}).wait(1).to({graphics:mask_2_graphics_4,x:56.6543,y:61.4872}).wait(1).to({graphics:mask_2_graphics_5,x:57.6812,y:63.3994}).wait(1).to({graphics:mask_2_graphics_6,x:58.6959,y:65.289}).wait(1).to({graphics:mask_2_graphics_7,x:59.6984,y:67.156}).wait(1).to({graphics:mask_2_graphics_8,x:60.6888,y:69.0003}).wait(1).to({graphics:mask_2_graphics_9,x:61.6671,y:70.8221}).wait(1).to({graphics:mask_2_graphics_10,x:62.6332,y:72.6211}).wait(1).to({graphics:mask_2_graphics_11,x:63.5871,y:74.3976}).wait(1).to({graphics:mask_2_graphics_12,x:64.5289,y:76.1514}).wait(1).to({graphics:mask_2_graphics_13,x:65.4585,y:77.8826}).wait(1).to({graphics:mask_2_graphics_14,x:66.376,y:79.5912}).wait(1).to({graphics:mask_2_graphics_15,x:67.2813,y:81.2771}).wait(1).to({graphics:mask_2_graphics_16,x:68.1745,y:82.9404}).wait(1).to({graphics:mask_2_graphics_17,x:69.0556,y:84.5811}).wait(1).to({graphics:mask_2_graphics_18,x:68.62,y:86.1991}).wait(1).to({graphics:mask_2_graphics_19,x:67.3351,y:87.7945}).wait(1).to({graphics:mask_2_graphics_20,x:66.0684,y:89.3673}).wait(1).to({graphics:mask_2_graphics_21,x:64.82,y:90.9174}).wait(1).to({graphics:mask_2_graphics_22,x:63.5898,y:92.445}).wait(1).to({graphics:mask_2_graphics_23,x:63.3567,y:94.733}).wait(121).to({graphics:mask_2_graphics_144,x:63.3567,y:94.733}).wait(1).to({graphics:null,x:0,y:0}).wait(45));

	// Layer_1
	this.instance_2 = new lib.germs_group();
	this.instance_2.setTransform(156.5,130,1,1,0,0,0,210.5,142);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(143).to({_off:true},1).wait(45));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-12,427,277);


(lib.copy_01b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// _
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B3785").s().p("AANBqIAAiqIgoAlIgVgZIA/g1IAiAAIAADTg");
	this.shape.setTransform(8.55,21.375);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(51).to({_off:false},0).wait(93).to({_off:true},1).wait(2));

	// numbers_scrolling
	this.instance = new lib.numbers_scrolling("synched",2);
	this.instance.setTransform(26.6,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_1.setTransform(28.525,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},37).to({state:[{t:this.shape_1}]},14).to({state:[{t:this.shape_1}]},93).to({state:[]},1).wait(2));

	// _
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B3785").s().p("AgcAoIAVhPIAkAAIgaBPg");
	this.shape_2.setTransform(59.875,31.825);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(31).to({_off:false},0).wait(113).to({_off:true},1).wait(2));

	// numbers_scrolling
	this.instance_1 = new lib.numbers_scrolling("synched",1);
	this.instance_1.setTransform(44.6,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_3.setTransform(46.525,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},31).to({state:[{t:this.shape_3}]},19).to({state:[{t:this.shape_3}]},94).to({state:[]},1).wait(2));

	// numbers_scrolling
	this.instance_2 = new lib.numbers_scrolling("synched",7);
	this.instance_2.setTransform(71.6,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_4.setTransform(73.525,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},24).to({state:[{t:this.shape_4}]},24).to({state:[{t:this.shape_4}]},96).to({state:[]},1).wait(2));

	// numbers_scrolling
	this.instance_3 = new lib.numbers_scrolling("synched",3);
	this.instance_3.setTransform(88.6,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_5.setTransform(90.525,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},13).to({state:[{t:this.shape_5}]},33).to({state:[{t:this.shape_5}]},98).to({state:[]},1).wait(2));

	// numbers_scrolling
	this.instance_4 = new lib.numbers_scrolling("synched",0);
	this.instance_4.setTransform(107.1,264.9,1,1,0,0,0,12.5,264.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B3785").s().p("AgNBtQgIgCgIgDQgJgEgIgHQgIgIgHgMQgHgMgEgSQgEgSAAgZQAAgYAEgSQAEgSAHgMQAHgMAIgIQAIgHAJgEQAIgDAIgBIANgCIAOACQAIABAIADQAJAEAIAHQAJAIAGAMQAHAMAEASQAEASAAAYQAAAZgEASQgEASgHAMQgGAMgJAIQgIAHgJAEQgIADgIACIgOABgAgVhCQgIAIgEALQgEAMgBANIgCAWIACAXQABANAEAMQAEAMAIAIQAJAIAMAAQANAAAJgIQAIgIAEgMQAEgMACgNIABgXIgBgWQgCgNgEgMQgEgLgIgIQgJgJgNAAQgMAAgJAJg");
	this.shape_6.setTransform(109.025,22.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.shape_6}]},44).to({state:[{t:this.shape_6}]},100).to({state:[]},1).wait(2));

	// GERMS
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B3785").s().p("AgpBpQgSgHgOgPIAdgcQAHALALAGQALAFANAAIAMgBQAHgCAFgEQAGgDADgGQADgFAAgIQAAgLgHgHQgIgGgLgEIgXgJQgNgDgLgHQgMgGgHgLQgHgMAAgSQAAgRAGgMQAHgMALgIQALgIAOgEQAOgEAOAAQARAAAPAGQAQAFANALIgcAdQgGgIgKgEQgKgEgLAAIgMABQgGACgFADQgFADgDAGQgDAFAAAHQAAALAIAGQAHAFALAEIAXAJQAOADALAHQALAGAHAMQAIALAAATQAAARgGANQgHAMgKAJQgLAIgOAEQgOAFgPAAQgUAAgSgHg");
	this.shape_7.setTransform(223.575,21.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B3785").s().p("ABOBqIAAivIgBAAIhACvIgaAAIhAivIgBAAIAACvIgkAAIAAjTIA6AAIA4CUIA5iUIA6AAIAADTg");
	this.shape_8.setTransform(201.45,21.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B3785").s().p("AAjBqIgxhaIgbAAIAABaIgmAAIAAjTIBKAAQAOAAAOADQAPADALAGQALAHAGAMQAHAMAAASQAAAXgNAPQgNAPgXADIA4BegAgpgPIAdAAIAPgBQAIgBAHgCQAHgDAEgGQAEgGAAgLQAAgJgEgGQgDgFgHgDQgGgDgIgBIgOgBIggAAg");
	this.shape_9.setTransform(179.025,21.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B3785").s().p("AhIBqIAAjTICMAAIAAAiIhmAAIAAA0IBgAAIAAAhIhgAAIAAA6IBrAAIAAAig");
	this.shape_10.setTransform(160.025,21.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B3785").s().p("AggBoQgVgIgOgPQgQgOgIgVQgIgUAAgZQAAgZAIgUQAIgVAQgPQAOgPAVgIQAVgIAXAAQAZAAAVAGQAVAGARAPIgcAcQgKgKgPgFQgPgFgPAAQgQAAgOAGQgNAFgJALQgKAKgGAOQgEAOgBAQQABAQAEAOQAGAOAKALQAJAKANAGQAOAGAQAAQAOAAANgCQAMgDAKgGIAAgyIgsAAIAAghIBSAAIAABsQgnAVgxAAQgXAAgVgIg");
	this.shape_11.setTransform(138.3,21.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},144).to({state:[]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0,234.79999999999998,46);


// stage content:
(lib.LysolGermSeason_300x250_v2_en = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		//this.btnColor;
		////this.downText = this.cta.cta.textDown;
		////this.upText = this.cta.cta.textUp;
		////this.textRestingYPos = 17;
		//this.ctaTextOffset = 30;
		
		////self.upText.y = this.textRestingYPos + this.ctaTextOffset;
		////self.downText.y = this.textRestingYPos;
		
		//this.setBtnColor = function(p_color) {
		//	switch (p_color) {
		//		case "white":
		//			self.cta.cta.arrow.gotoAndPlay("dark-green");
		//			//self.cta.cta.textDown.gotoAndPlay("dark-green");
		//			self.cta.cta.bg.gotoAndPlay("white");
		//			self.btnColor = "white";
		//			break;
		//		case "regular-green":
		//			self.cta.cta.arrow.gotoAndPlay("white");
		//			//self.cta.cta.textDown.gotoAndPlay("white");
		//			self.cta.cta.bg.gotoAndPlay("regular-green");
		//			self.btnColor = "regular-green";
		//			break;	
		//	}
		//}
		//this.setRolloverBtnColor = function() {
		//	if (self.btnColor == "regular-green") {
		//		setTimeout(function() {
		//			self.cta.cta.arrow.gotoAndPlay("dark-green");
		//		}, 150);
		//	}	
		//}
		//this.setRolloutBtnColor = function() {
		//	if (self.btnColor == "regular-green") {
		//		setTimeout(function() {
		//			self.cta.cta.arrow.gotoAndPlay("white");
		//		}, 150);
		//	}
		//}
		
		//// Set initial button color
		//setTimeout(function() {
		//	self.setBtnColor("regular-green");
		//}, 50);
		
		// Clicktag =======================
		
		this.clicktag.addEventListener('click', handleClick);
		//this.clicktag.addEventListener('mouseover', handleMouseOver);
		//this.clicktag.addEventListener('mouseout', handleMouseOut);
		
		function handleClick() {
		    window.ctaClick();
		}
		//function handleMouseOver() {
		//	//var landingY = self.textRestingYPos;
		//	self.cta.gotoAndPlay("over"); 
		//	self.cta.cta.gotoAndPlay("over");
		//	self.setRolloverBtnColor();
		//	//self.downText.y = landingY;
		//	//self.upText.y = landingY-self.ctaTextOffset;
		//	//createjs.Tween.get(self.downText, {override:true}).to({y:landingY+self.ctaTextOffset}, 200, createjs.Ease.quintIn);
		//	//createjs.Tween.get(self.upText, {override:true}).wait(200).to({y:landingY}, 300, createjs.Ease.quintOut);
		//}
		//function handleMouseOut() {
		//	//var landingY = self.textRestingYPos;
		//	self.cta.gotoAndPlay("out");
		//	self.cta.cta.gotoAndPlay("out");
		//	self.setRolloutBtnColor();
		//	//self.downText.y = landingY+self.ctaTextOffset;
		//	//self.upText.y = landingY;
		//	//createjs.Tween.get(self.downText, {override:true}).wait(200).to({y:landingY}, 300, createjs.Ease.quintOut);
		//	//createjs.Tween.get(self.upText, {override:true}).to({y:landingY-self.ctaTextOffset}, 200, createjs.Ease.quintIn);
		//}
		//
	}
	this.frame_359 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(359).call(this.frame_359).wait(1));

	// ClickTag
	this.clicktag = new lib.click();
	this.clicktag.setTransform(150.1,125.3,1,0.9999,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.clicktag, 0, 1, 2, false, new lib.click(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clicktag).wait(360));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// what_it_takes
	this.instance = new lib.whatittakes();
	this.instance.setTransform(247.5,184,1,1,0,0,0,32.5,11);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(331).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(20));

	// product
	this.instance_1 = new lib.product_1();
	this.instance_1.setTransform(355.5,106.5,1,1,0,0,0,35.5,54.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(324).to({_off:false},0).to({x:245.5},9,cjs.Ease.get(1)).wait(27));

	// bg_blue
	this.instance_2 = new lib.bg_blue();
	this.instance_2.setTransform(358,125,1,1,0,0,0,52,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(317).to({_off:false},0).to({x:248},9,cjs.Ease.get(1)).wait(34));

	// copy_04
	this.instance_3 = new lib.copy_04();
	this.instance_3.setTransform(68.1,234.8,1,1,0,0,0,61.1,12);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(310).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(1)).wait(41));

	// btn_cta
	this.instance_4 = new lib.btn_cta();
	this.instance_4.setTransform(90,151,1,1,0,0,0,61,20.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(303).to({_off:false},0).to({x:70,alpha:1},9,cjs.Ease.get(1)).wait(48));

	// copy_03
	this.instance_5 = new lib.copy_03();
	this.instance_5.setTransform(109.7,90.25,1,1,0,0,0,82,27.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(297).to({_off:false},0).to({x:89.7,alpha:1},9,cjs.Ease.get(1)).wait(54));

	// copy_02
	this.instance_6 = new lib.copy_02();
	this.instance_6.setTransform(150.05,125.7,1,1,0,0,0,122.8,27.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(244).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).to({_off:true},38).wait(63));

	// logo
	this.instance_7 = new lib.logo_1();
	this.instance_7.setTransform(265.5,217,1,1,0,0,0,24.5,23);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(163).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(1)).to({_off:true},119).wait(63));

	// bg_light_blue
	this.instance_8 = new lib.bg_lightblue();
	this.instance_8.setTransform(98,-125,1,1,0,0,0,98,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(235).to({_off:false},0).to({y:125},9,cjs.Ease.get(1)).wait(116));

	// hand
	this.instance_9 = new lib.hand_spray_1("single",0);
	this.instance_9.setTransform(-97.1,245.05,1,1,-22.7187,0,0,-0.1,112);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(178).to({_off:false},0).to({regX:0,rotation:0,x:0,y:185},4,cjs.Ease.get(1)).wait(3).to({mode:"synched"},0).to({regX:0.1,rotation:4.9513,x:-4.05,startPosition:12},20,cjs.Ease.get(1)).to({regX:-0.1,rotation:-7.0401,x:-5.2,y:195,startPosition:38},20,cjs.Ease.get(1)).to({regX:0,rotation:0,x:0,y:185,mode:"single",startPosition:0},10,cjs.Ease.get(1)).to({y:425},9,cjs.Ease.get(1)).to({_off:true},1).wait(115));

	// spray
	this.instance_10 = new lib.spray_mist("synched",0);
	this.instance_10.setTransform(150,125,0.6263,0.6263,0,0,0,150,150.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(185).to({_off:false},0).to({regX:149.8,regY:149.8,scaleX:1.486,scaleY:1.486,x:149.9,y:124.65,alpha:0.2813},40,cjs.Ease.get(1)).to({scaleX:2.1808,scaleY:2.1808,x:150,y:124.75,alpha:0},10).to({_off:true},4).wait(121));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_78 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_79 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_80 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_81 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_82 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_83 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_84 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_85 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_86 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_87 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_88 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_89 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_90 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_91 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_92 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_93 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_94 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_95 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_96 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_97 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_98 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_99 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_100 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_101 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_102 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_103 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_104 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_105 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_106 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_107 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_108 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_109 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_110 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_111 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_112 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_113 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_114 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_115 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_116 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_117 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_118 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_119 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_120 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_121 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_122 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_123 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_124 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_125 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_126 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_127 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_128 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_129 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_130 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_131 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_132 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_133 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_134 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_135 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_136 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_137 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_138 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_139 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_140 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_141 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_142 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_143 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_144 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_145 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_146 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_147 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_148 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_149 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_150 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_151 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_152 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_153 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_154 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_155 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_156 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_157 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_158 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_159 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_160 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_161 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_162 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_163 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_164 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_165 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_166 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_167 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_168 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_169 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_170 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_171 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_172 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_173 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_174 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_175 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_176 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_177 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_178 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_179 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_180 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_181 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_182 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_183 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_184 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_185 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_186 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_187 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_188 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_189 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_190 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_191 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_192 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_193 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_194 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_195 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_196 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_197 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_198 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_199 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_200 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_201 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_202 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_203 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_204 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_205 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_206 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_207 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_208 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_209 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_210 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_211 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_212 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_213 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_214 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_215 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_216 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_217 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_218 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_219 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_220 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_221 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_222 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_223 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_224 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_225 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_226 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_227 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_228 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_229 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_230 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_231 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_232 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_233 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_234 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_235 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_236 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_237 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");
	var mask_graphics_238 = new cjs.Graphics().p("EgxHAo8MAAAhR3MBiPAAAMAAABR3gAgOgOQgGAHAAAHQAAAIAGAHQAHAGAHAAQAJAAAFgGQAHgHAAgIQAAgHgHgHQgFgGgJAAQgHAAgHAGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(78).to({graphics:mask_graphics_78,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_79,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_80,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_81,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_82,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_83,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_84,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_85,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_86,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_87,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_88,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_89,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_90,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_91,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_92,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_93,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_94,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_95,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_96,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_97,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_98,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_99,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_100,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_101,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_102,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_103,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_104,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_105,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_106,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_107,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_108,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_109,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_110,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_111,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_112,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_113,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_114,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_115,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_116,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_117,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_118,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_119,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_120,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_121,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_122,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_123,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_124,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_125,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_126,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_127,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_128,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_129,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_130,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_131,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_132,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_133,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_134,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_135,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_136,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_137,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_138,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_139,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_140,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_141,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_142,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_143,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_144,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_145,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_146,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_147,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_148,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_149,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_150,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_151,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_152,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_153,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_154,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_155,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_156,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_157,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_158,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_159,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_160,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_161,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_162,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_163,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_164,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_165,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_166,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_167,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_168,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_169,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_170,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_171,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_172,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_173,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_174,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_175,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_176,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_177,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_178,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_179,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_180,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_181,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_182,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_183,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_184,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_185,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_186,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_187,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_188,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_189,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_190,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_191,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_192,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_193,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_194,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_195,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_196,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_197,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_198,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_199,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_200,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_201,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_202,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_203,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_204,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_205,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_206,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_207,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_208,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_209,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_210,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_211,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_212,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_213,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_214,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_215,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_216,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_217,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_218,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_219,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_220,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_221,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_222,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_223,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_224,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_225,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_226,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_227,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_228,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_229,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_230,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_231,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_232,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_233,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_234,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_235,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_236,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_237,x:150.05,y:125.05}).wait(1).to({graphics:mask_graphics_238,x:150.05,y:125.05}).wait(1).to({graphics:null,x:0,y:0}).wait(121));

	// copy_01c
	this.instance_11 = new lib.copy_01c();
	this.instance_11.setTransform(113.5,237.8,1,1,0,0,0,104.5,8.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(94).to({_off:false},0).to({alpha:1},13).wait(97).to({alpha:0},31,cjs.Ease.get(1)).to({_off:true},4).wait(121));

	// copy_01b
	this.instance_12 = new lib.copy_01b("single",0);
	this.instance_12.setTransform(120.05,168,1,1,0,0,0,136.1,25.9);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(78).to({_off:false},0).to({y:158,alpha:1},15,cjs.Ease.get(1)).wait(1).to({mode:"synched",loop:false},0).to({x:169.05,startPosition:51},51,cjs.Ease.get(0.2)).wait(59).to({startPosition:110},0).to({alpha:0,startPosition:141},31,cjs.Ease.get(1)).to({_off:true},4).wait(121));

	// copy_01a
	this.instance_13 = new lib.copy_01a();
	this.instance_13.setTransform(150,134.5,1,1,0,0,0,91,22.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(71).to({_off:false},0).to({y:124.5,alpha:1},15,cjs.Ease.get(1)).wait(118).to({alpha:0},31,cjs.Ease.get(1)).to({_off:true},4).wait(121));

	// copy_01
	this.instance_14 = new lib.copy_01();
	this.instance_14.setTransform(162.2,131.5,1,1,0,0,0,84.2,25.9);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(24).to({_off:false},0).to({alpha:1},15).wait(24).to({y:98.5},15,cjs.Ease.get(1)).wait(126).to({alpha:0},31,cjs.Ease.get(1)).to({_off:true},4).wait(121));

	// germs
	this.instance_15 = new lib.germs("synched",0,false);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(94).to({_off:false},0).wait(110).to({startPosition:110},0).to({alpha:0,startPosition:141},31,cjs.Ease.get(1)).to({_off:true},4).wait(121));

	// white_box
	this.instance_16 = new lib.whitebox();
	this.instance_16.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(16).to({_off:false},0).to({alpha:0.6914},8).wait(39).to({alpha:0.5},31,cjs.Ease.get(1)).wait(266));

	// logo
	this.instance_17 = new lib.logo_1();
	this.instance_17.setTransform(265.5,217,1,1,0,0,0,24.5,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(16).to({alpha:0},8,cjs.Ease.get(1)).to({_off:true},1).wait(335));

	// boy
	this.instance_18 = new lib.girl();
	this.instance_18.setTransform(169.4,144.7,0.9999,0.9999,-0.0009,0,0,169.4,144.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(63).to({alpha:0},31,cjs.Ease.get(1)).wait(266));

	// BG
	this.instance_19 = new lib.whitebox();
	this.instance_19.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.8,-153.3,604.5,638.3);
// library properties:
lib.properties = {
	id: '3CE4C820892743FB9D5BF0281A417E72',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/boy.jpg?1573583161932", id:"boy"},
		{src:"images/germs_sm.png?1573583161932", id:"germs_sm"},
		{src:"images/hand_spray.png?1573583161932", id:"hand_spray"},
		{src:"images/logo.png?1573583161932", id:"logo"},
		{src:"images/product.png?1573583161932", id:"product"},
		{src:"images/spray_01.png?1573583161932", id:"spray_01"},
		{src:"images/spray_02.png?1573583161932", id:"spray_02"},
		{src:"images/whatittaketoprotect.png?1573583161932", id:"whatittaketoprotect"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3CE4C820892743FB9D5BF0281A417E72'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;