(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [
    {
      name: "P1_20Openloop_atlas_1",
      frames: [
        [1216, 1292, 416, 45],
        [1410, 760, 162, 40],
        [1716, 607, 144, 37],
        [1574, 760, 144, 40],
        [1718, 453, 128, 40],
        [1410, 298, 153, 152],
        [1410, 452, 152, 152],
        [1410, 606, 151, 151],
        [1565, 298, 152, 153],
        [1563, 607, 151, 151],
        [1564, 453, 152, 152],
        [1410, 0, 308, 296],
        [0, 803, 797, 507],
        [799, 803, 415, 489],
        [1216, 803, 410, 487],
        [0, 0, 1408, 801],
      ],
    },
  ];

  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new cjs.MovieClip();
  // symbols:

  (lib.CachedBmp_16 = function () {
    this.initialize(ss["P1_20Openloop_atlas_1"]);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_15 = function () {
    this.initialize(ss["P1_20Openloop_atlas_1"]);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_14 = function () {
    this.initialize(ss["P1_20Openloop_atlas_1"]);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_13 = function () {
    this.initialize(ss["P1_20Openloop_atlas_1"]);
    this.gotoAndStop(3);
  }).prototype = p = new cjs.Sprite();

  (lib.CachedBmp_12 = function () {
    this.initialize(ss["P1_20Openloop_atlas_1"]);
    this.gotoAndStop(4);
  }).prototype = p = new cjs.Sprite();

  (lib._1 = function () {
    this.initialize(ss["P1_20Openloop_atlas_1"]);
    this.gotoAndStop(5);
  }).prototype = p = new cjs.Sprite();

  (lib._2 = function () {
    this.initialize(ss["P1_20Openloop_atlas_1"]);
    this.gotoAndStop(6);
  }).prototype = p = new cjs.Sprite();

  (lib._3 = function () {
    this.initialize(ss["P1_20Openloop_atlas_1"]);
    this.gotoAndStop(7);
  }).prototype = p = new cjs.Sprite();

  (lib._4 = function () {
    this.initialize(ss["P1_20Openloop_atlas_1"]);
    this.gotoAndStop(8);
  }).prototype = p = new cjs.Sprite();

  (lib._5 = function () {
    this.initialize(ss["P1_20Openloop_atlas_1"]);
    this.gotoAndStop(9);
  }).prototype = p = new cjs.Sprite();

  (lib._6 = function () {
    this.initialize(ss["P1_20Openloop_atlas_1"]);
    this.gotoAndStop(10);
  }).prototype = p = new cjs.Sprite();

  (lib.Attenuator = function () {
    this.initialize(ss["P1_20Openloop_atlas_1"]);
    this.gotoAndStop(11);
  }).prototype = p = new cjs.Sprite();

  (lib.image2 = function () {
    this.initialize(ss["P1_20Openloop_atlas_1"]);
    this.gotoAndStop(12);
  }).prototype = p = new cjs.Sprite();

  (lib.Powersupply = function () {
    this.initialize(ss["P1_20Openloop_atlas_1"]);
    this.gotoAndStop(13);
  }).prototype = p = new cjs.Sprite();

  (lib.ServoAmp = function () {
    this.initialize(ss["P1_20Openloop_atlas_1"]);
    this.gotoAndStop(14);
  }).prototype = p = new cjs.Sprite();

  (lib.Tachounit = function () {
    this.initialize(ss["P1_20Openloop_atlas_1"]);
    this.gotoAndStop(15);
  }).prototype = p = new cjs.Sprite();
  // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(
        this.mode,
        this.startPosition,
        this.loop,
        this.reversed
      )
    );
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

  (lib.Symbol15 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib._5();
    this.instance.setTransform(-75.5, -75.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol15,
    new cjs.Rectangle(-75.5, -75.5, 151, 151),
    null
  );

  (lib.Symbol14 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#6600FF").ss(3, 1, 1).p("AtWT7MAatgn1");
    this.shape.setTransform(0, 0.025);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol14,
    new cjs.Rectangle(-87, -129, 174, 258.1),
    null
  );

  (lib.Symbol13 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib._6();
    this.instance.setTransform(-76, -76);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol13,
    new cjs.Rectangle(-76, -76, 152, 152),
    null
  );

  (lib.Symbol12 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#6633CC").ss(3, 1, 1).p("Aq0EnIVppN");

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol12,
    new cjs.Rectangle(-70.7, -30.9, 141.5, 61.9),
    null
  );

  (lib.Symbol11 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#6633CC").ss(3, 1, 1).p("ALOyHMgWbAkP");
    this.shape.setTransform(0, 0.025);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol11,
    new cjs.Rectangle(-73.2, -117.5, 146.5, 235.1),
    null
  );

  (lib.Symbol10 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib._4();
    this.instance.setTransform(-76, -76.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol10,
    new cjs.Rectangle(-76, -76.5, 152, 153),
    null
  );

  (lib.Symbol9 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib._3();
    this.instance.setTransform(-75.5, -75.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol9,
    new cjs.Rectangle(-75.5, -75.5, 151, 151),
    null
  );

  (lib.Symbol8 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib._2();
    this.instance.setTransform(-76, -76);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol8,
    new cjs.Rectangle(-76, -76, 152, 152),
    null
  );

  (lib.Symbol7 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib._1();
    this.instance.setTransform(-76.5, -76);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol7,
    new cjs.Rectangle(-76.5, -76, 153, 152),
    null
  );

  (lib.Symbol6 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#666699").ss(3, 1, 1).p("AGzt6Itlb1");
    this.shape.setTransform(0, 0.025);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol6,
    new cjs.Rectangle(-45, -90.5, 90, 181.1),
    null
  );

  (lib.Symbol5 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#666699").ss(3, 1, 1).p("AOT1pMgclArT");
    this.shape.setTransform(0, 0.025);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol5,
    new cjs.Rectangle(-93, -140, 186, 280.1),
    null
  );

  (lib.Symbol4 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#669966").ss(3, 1, 1).p("ALQH5I2fvx");
    this.shape.setTransform(0.025, 0.025);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol4,
    new cjs.Rectangle(-73.4, -51.9, 146.9, 103.9),
    null
  );

  (lib.Symbol3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#66CC33").ss(3, 1, 1).p("AJwFNIzfqZ");
    this.shape.setTransform(0.025, 0.025);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol3,
    new cjs.Rectangle(-63.9, -34.8, 127.9, 69.69999999999999),
    null
  );

  (lib.Symbol2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#66FF00").ss(3, 1, 1).p("AnQisIOhFZ");
    this.shape.setTransform(0.025, 0);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol2,
    new cjs.Rectangle(-47.9, -18.8, 95.9, 37.6),
    null
  );

  (lib.Symbol1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(1, 1, 1)
      .p(
        "AgxAAQAAgVAOgOQAPgOAUAAQAVAAAPAOQAOAOAAAVQAAAVgOAPQgPAOgVAAQgUAAgPgOQgOgOAAgU"
      );

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#000000")
      .s()
      .p(
        "AgiAjQgPgOAAgTIAAgCQAAgVAPgNQAOgPAUAAQAVAAAOAPQAPANAAAVQAAAVgPAOQgOAPgVAAQgUAAgOgPg"
      );

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Symbol1,
    new cjs.Rectangle(-6, -6, 12, 12),
    null
  );

  // stage content:
  (lib.P1Openloop = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    this.actionFrames = [0];
    this.isSingleFrame = false;
    // timeline functions:
    this.frame_0 = function () {
      if (this.isSingleFrame) {
        return;
      }
      if (this.totalFrames == 1) {
        this.isSingleFrame = true;
      }
      var root = this;

      this.line1.visible = false;
      this.t1.on("pressmove", movet1);

      function movet1(e) {
        var p = stage.globalToLocal(e.stageX, e.stageY);
        e.currentTarget.x = p.x;
        e.currentTarget.y = p.y;
      }

      this.t1.on("pressup", dropt1);

      function dropt1() {
        if (
          Math.abs(root.t1.x - root.s1.x) < 15 &&
          Math.abs(root.t1.y - root.s1.y) < 15
        ) {
          root.t1.x = root.s1.x;
          root.t1.y = root.s1.y;
          root.t1.alpha = 1;
          root.line1.visible = true;
        } else {
          root.line1.visible = false;
        }
      }

      this.line2.visible = false;
      this.t2.on("pressmove", movet2);

      function movet2(e) {
        var p = stage.globalToLocal(e.stageX, e.stageY);
        e.currentTarget.x = p.x;
        e.currentTarget.y = p.y;
      }

      this.t2.on("pressup", dropt2);

      function dropt2() {
        if (
          Math.abs(root.t2.x - root.s2.x) < 15 &&
          Math.abs(root.t2.y - root.s2.y) < 15
        ) {
          root.t2.x = root.s2.x;
          root.t2.y = root.s2.y;
          root.t2.alpha = 1;
          root.line2.visible = true;
        } else {
          root.line2.visible = false;
        }
      }

      this.line3.visible = false;
      this.t3.on("pressmove", movet3);

      function movet3(e) {
        var p = stage.globalToLocal(e.stageX, e.stageY);
        e.currentTarget.x = p.x;
        e.currentTarget.y = p.y;
      }

      this.t3.on("pressup", dropt3);

      function dropt3() {
        if (
          Math.abs(root.t3.x - root.s3.x) < 15 &&
          Math.abs(root.t3.y - root.s3.y) < 15
        ) {
          root.t3.x = root.s3.x;
          root.t3.y = root.s3.y;
          root.t3.alpha = 1;
          root.line3.visible = true;
        } else {
          root.line3.visible = false;
        }
      }

      this.line4.visible = false;
      root.line4k2.visible = false;
      this.t4.on("pressmove", movet4);

      function movet4(e) {
        var p = stage.globalToLocal(e.stageX, e.stageY);
        e.currentTarget.x = p.x;
        e.currentTarget.y = p.y;
      }

      this.t4.on("pressup", dropt4);

      function dropt4() {
        if (
          Math.abs(root.t4.x - root.s4.x) < 15 &&
          Math.abs(root.t4.y - root.s4.y) < 15
        ) {
          root.t4.x = root.s4.x;
          root.t4.y = root.s4.y;
          root.t4.alpha = 1;
          root.line4.visible = true;
          root.line4k2.visible = true;
        } else {
          root.line4.visible = false;
          root.line4k2.visible = false;
        }
      }

      this.line5.visible = false;
      this.t5.on("pressmove", movet5);

      function movet5(e) {
        var p = stage.globalToLocal(e.stageX, e.stageY);
        e.currentTarget.x = p.x;
        e.currentTarget.y = p.y;
      }

      this.t5.on("pressup", dropt5);

      function dropt5() {
        if (
          Math.abs(root.t5.x - root.s5.x) < 15 &&
          Math.abs(root.t5.y - root.s5.y) < 15
        ) {
          root.t5.x = root.s5.x;
          root.t5.y = root.s5.y;
          root.t5.alpha = 1;
          root.line5.visible = true;
        } else {
          root.line5.visible = false;
        }
      }

      this.line6.visible = false;
      root.line6k2.visible = false;
      this.t6.on("pressmove", movet6);

      function movet6(e) {
        var p = stage.globalToLocal(e.stageX, e.stageY);
        e.currentTarget.x = p.x;
        e.currentTarget.y = p.y;
      }

      this.t6.on("pressup", dropt6);

      function dropt6() {
        if (
          Math.abs(root.t6.x - root.s6.x) < 15 &&
          Math.abs(root.t6.y - root.s6.y) < 15
        ) {
          root.t6.x = root.s6.x;
          root.t6.y = root.s6.y;
          root.t6.alpha = 1;
          root.line6.visible = true;
          root.line6k2.visible = true;
        } else {
          root.line6.visible = false;
        }
      }
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

    // Tutup
    this.t4 = new lib.Symbol10();
    this.t4.name = "t4";
    this.t4.setTransform(151.1, 346.45, 0.1118, 0.1111, 0, 0, 0, 0.5, 0);

    this.t3 = new lib.Symbol9();
    this.t3.name = "t3";
    this.t3.setTransform(119.15, 346.5, 0.1125, 0.1125, 0, 0, 0, 0.9, 0.5);

    this.t6 = new lib.Symbol13();
    this.t6.name = "t6";
    this.t6.setTransform(122.1, 379.1, 0.1118, 0.1118, 0, 0, 0, 0.5, 0.5);

    this.t5 = new lib.Symbol15();
    this.t5.name = "t5";
    this.t5.setTransform(88.1, 379.05, 0.1126, 0.1126, 0, 0, 0, 0.5, 0);

    this.instance = new lib.Symbol13();
    this.instance.setTransform(
      687.45,
      278.1,
      0.1118,
      0.1118,
      0,
      0,
      0,
      0.5,
      0.5
    );

    this.instance_1 = new lib.Symbol13();
    this.instance_1.setTransform(
      687.45,
      102.6,
      0.1118,
      0.1118,
      0,
      0,
      0,
      0.5,
      0.5
    );

    this.t2 = new lib.Symbol8();
    this.t2.name = "t2";
    this.t2.setTransform(88.05, 348.5, 0.1118, 0.1118, 0, 0, 0, 0, 0.5);

    this.t1 = new lib.Symbol7();
    this.t1.name = "t1";
    this.t1.setTransform(52.5, 348.5, 0.1111, 0.1118, 0, 0, 0, 0, 0.5);

    this.instance_2 = new lib.Symbol8();
    this.instance_2.setTransform(
      167.05,
      145.55,
      0.1118,
      0.1118,
      0,
      0,
      0,
      0,
      0.5
    );

    this.instance_3 = new lib.Symbol7();
    this.instance_3.setTransform(
      168.05,
      127.55,
      0.1111,
      0.1118,
      0,
      0,
      0,
      0,
      0.5
    );

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_3 },
            { t: this.instance_2 },
            { t: this.t1 },
            { t: this.t2 },
            { t: this.instance_1 },
            { t: this.instance },
            { t: this.t5 },
            { t: this.t6 },
            { t: this.t3 },
            { t: this.t4 },
          ],
        })
        .wait(1)
    );

    // Line
    this.instance_4 = new lib.Symbol15();
    this.instance_4.setTransform(
      541.55,
      357.05,
      0.1126,
      0.1126,
      0,
      0,
      0,
      0.5,
      0
    );

    this.line5 = new lib.Symbol14();
    this.line5.name = "line5";
    this.line5.setTransform(628.5, 229.5);

    this.line6k2 = new lib.Symbol12();
    this.line6k2.name = "line6k2";
    this.line6k2.setTransform(617.25, 308.5);

    this.line6 = new lib.Symbol11();
    this.line6.name = "line6";
    this.line6.setTransform(616.75, 217.9);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.line6 },
            { t: this.line6k2 },
            { t: this.line5 },
            { t: this.instance_4 },
          ],
        })
        .wait(1)
    );

    // Wadah
    this.instance_5 = new lib.Symbol10();
    this.instance_5.setTransform(638, 280.05, 0.1118, 0.1111, 0, 0, 0, 0.5, 0);

    this.instance_6 = new lib.Symbol10();
    this.instance_6.setTransform(
      541.55,
      379.05,
      0.1118,
      0.1111,
      0,
      0,
      0,
      0.5,
      0
    );

    this.instance_7 = new lib.Symbol9();
    this.instance_7.setTransform(
      168.15,
      106.4,
      0.1125,
      0.1125,
      0,
      0,
      0,
      0.9,
      0.5
    );

    this.line4 = new lib.Symbol6();
    this.line4.name = "line4";
    this.line4.setTransform(681.5, 190.95);

    this.line4k2 = new lib.Symbol5();
    this.line4k2.name = "line4k2";
    this.line4k2.setTransform(633.5, 240.45);

    this.line3 = new lib.Symbol4();
    this.line3.name = "line3";
    this.line3.setTransform(239, 159.5);

    this.line2 = new lib.Symbol3();
    this.line2.name = "line2";
    this.line2.setTransform(230.45, 176.65);

    this.line1 = new lib.Symbol2();
    this.line1.name = "line1";
    this.line1.setTransform(214.5, 143.35);

    this.s6 = new lib.Symbol1();
    this.s6.name = "s6";
    this.s6.setTransform(543, 338.95);

    this.s5 = new lib.Symbol1();
    this.s5.name = "s5";
    this.s5.setTransform(712, 102);

    this.s4 = new lib.Symbol1();
    this.s4.name = "s4";
    this.s4.setTransform(725, 101.9);

    this.s3 = new lib.Symbol1();
    this.s3.name = "s3";
    this.s3.setTransform(311, 210);

    this.s2 = new lib.Symbol1();
    this.s2.name = "s2";
    this.s2.setTransform(292.9, 210);

    this.s1 = new lib.Symbol1();
    this.s1.name = "s1";
    this.s1.setTransform(261, 160.65);

    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(1, 1, 1).p("AAAABIAAgB");
    this.shape.setTransform(570, 336.05);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape },
            { t: this.s1 },
            { t: this.s2 },
            { t: this.s3 },
            { t: this.s4 },
            { t: this.s5 },
            { t: this.s6 },
            { t: this.line1 },
            { t: this.line2 },
            { t: this.line3 },
            { t: this.line4k2 },
            { t: this.line4 },
            { t: this.instance_7 },
            { t: this.instance_6 },
            { t: this.instance_5 },
          ],
        })
        .wait(1)
    );

    // Komponen
    this.instance_8 = new lib.CachedBmp_16();
    this.instance_8.setTransform(31.5, 304.05, 0.5, 0.5);

    this.instance_9 = new lib.CachedBmp_15();
    this.instance_9.setTransform(433.95, 304.45, 0.5, 0.5);

    this.instance_10 = new lib.Powersupply();
    this.instance_10.setTransform(410, 244, 0.3639, 0.3439);

    this.instance_11 = new lib.CachedBmp_14();
    this.instance_11.setTransform(682.9, 152, 0.5, 0.5);

    this.instance_12 = new lib.CachedBmp_13();
    this.instance_12.setTransform(284.9, 133, 0.5, 0.5);

    this.instance_13 = new lib.CachedBmp_12();
    this.instance_13.setTransform(86.95, 86, 0.5, 0.5);

    this.instance_14 = new lib.Tachounit();
    this.instance_14.setTransform(429, 84, 0.2344, 0.3683);

    this.instance_15 = new lib.ServoAmp();
    this.instance_15.setTransform(244, 81, 0.3268, 0.3183);

    this.instance_16 = new lib.Attenuator();
    this.instance_16.setTransform(39, 86, 0.5131, 0.4574);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.instance_16 },
            { t: this.instance_15 },
            { t: this.instance_14 },
            { t: this.instance_13 },
            { t: this.instance_12 },
            { t: this.instance_11 },
            { t: this.instance_10 },
            { t: this.instance_9 },
            { t: this.instance_8 },
          ],
        })
        .wait(1)
    );

    // Background
    this.instance_17 = new lib.image2();
    this.instance_17.setTransform(1, 1, 0.1794, 0.1795);

    this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1));

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(401, 241, 358.1, 171.2);
  // library properties:
  lib.properties = {
    id: "8912FBE99AD90F40AB799C971E133E52",
    width: 800,
    height: 480,
    fps: 30,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [
      { src: "images/P1_20Openloop_atlas_1.png", id: "P1_20Openloop_atlas_1" },
    ],
    preloads: [],
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["8912FBE99AD90F40AB799C971E133E52"] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  an.makeResponsive = function (
    isResp,
    respDim,
    isScale,
    scaleType,
    domContainers
  ) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if (
          (respDim == "width" && lastW == iw) ||
          (respDim == "height" && lastH == ih)
        ) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + "px";
        container.style.height = h * sRatio + "px";
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds();
      }
    }
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
