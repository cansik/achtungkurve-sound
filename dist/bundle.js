(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kurve = /** @class */ (function () {
    function Kurve() {
    }
    Kurve.prototype.init = function () {
        var synth = new Tone.MembraneSynth().toMaster();
        //create a loop
        var loop = new Tone.Loop(function (time) {
            synth.triggerAttackRelease("C1", "8n", time);
        }, "4n");
        //play the loop between 0-2m on the transport
        loop.start(0).stop('2m');
        var playToggle = document.querySelector('.playToggle');
        playToggle.addEventListener('change', function (e) {
            if (e.target.checked) {
                Tone.Transport.start('+0.1');
            }
            else {
                Tone.Transport.stop();
            }
        });
        // auto play
        playToggle.click();
    };
    return Kurve;
}());
exports.Kurve = Kurve;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kurve_1 = require("./kurve/Kurve");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.run = function () {
        var kurve = new Kurve_1.Kurve();
        kurve.init();
    };
    return Main;
}());
var app = new Main();
document.addEventListener('DOMContentLoaded', app.run);

},{"./kurve/Kurve":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMva3VydmUvS3VydmUudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDRUE7SUFBQTtJQTJCQSxDQUFDO0lBekJHLG9CQUFJLEdBQUo7UUFFSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVoRCxlQUFlO1FBQ2YsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBVTtZQUN6QyxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNoRCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekIsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQXFCLENBQUM7UUFFM0UsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQU87WUFDbkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMxQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxZQUFZO1FBQ1osVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0EzQkEsQUEyQkMsSUFBQTtBQTNCWSxzQkFBSzs7Ozs7QUNGbEIsdUNBQW9DO0FBRXBDO0lBQUE7SUFNQSxDQUFDO0lBTEcsa0JBQUcsR0FBSDtRQUVJLElBQUksS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFFRCxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ3JCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZGVjbGFyZSB2YXIgVG9uZTogYW55O1xuXG5leHBvcnQgY2xhc3MgS3VydmVcbntcbiAgICBpbml0KClcbiAgICB7XG4gICAgICAgIGxldCBzeW50aCA9IG5ldyBUb25lLk1lbWJyYW5lU3ludGgoKS50b01hc3RlcigpO1xuXG4gICAgICAgIC8vY3JlYXRlIGEgbG9vcFxuICAgICAgICBsZXQgbG9vcCA9IG5ldyBUb25lLkxvb3AoZnVuY3Rpb24gKHRpbWUgOiBhbnkpIHtcbiAgICAgICAgICAgIHN5bnRoLnRyaWdnZXJBdHRhY2tSZWxlYXNlKFwiQzFcIiwgXCI4blwiLCB0aW1lKVxuICAgICAgICB9LCBcIjRuXCIpO1xuXG4gICAgICAgIC8vcGxheSB0aGUgbG9vcCBiZXR3ZWVuIDAtMm0gb24gdGhlIHRyYW5zcG9ydFxuICAgICAgICBsb29wLnN0YXJ0KDApLnN0b3AoJzJtJyk7XG5cbiAgICAgICAgbGV0IHBsYXlUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheVRvZ2dsZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAgICAgcGxheVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSA6IGFueSkge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBUb25lLlRyYW5zcG9ydC5zdGFydCgnKzAuMScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBUb25lLlRyYW5zcG9ydC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGF1dG8gcGxheVxuICAgICAgICBwbGF5VG9nZ2xlLmNsaWNrKCk7XG4gICAgfVxufSIsImltcG9ydCB7S3VydmV9IGZyb20gXCIuL2t1cnZlL0t1cnZlXCI7XG5cbmNsYXNzIE1haW4ge1xuICAgIHJ1bigpXG4gICAge1xuICAgICAgICBsZXQga3VydmUgPSBuZXcgS3VydmUoKTtcbiAgICAgICAga3VydmUuaW5pdCgpO1xuICAgIH1cbn1cblxubGV0IGFwcCA9IG5ldyBNYWluKCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYXBwLnJ1bik7Il19
