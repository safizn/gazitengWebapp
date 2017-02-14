
<dom-module id="main-document-element">
  <template>

    <style>
    * {
     font-family: 'almoniDL';
    }
    </style>

    <szn-applayout sections="{{sections}}" route-tail="{{routeTail}}" slug-active="{{slugActive}}">
        <projects-data projects="{{projects}}"></projects-data>
        <div class="projects" style=""> <!-- height: calc(100vh - 65px); -->
          <projects-view projects="{{projects}}" route="{{routeTail}}" slug-active="{{slugActive}}" ></projects-view>
          <paper-material id="pagespinner" elevation="1" style="margin: 40px auto 40px auto; display: flex; background-color: white; width: 50px; height: 50px; border-radius: 50%;">
            <paper-spinner  active style="margin: auto; display: flex; background-color: white;"></paper-spinner>
          </paper-material>
        </div>
        <div class="initiator" style="">
          <h2 class="page-title" style="background-color: #666666; -webkit-background-clip: text; -moz-background-clip: text; background-clip: text; color: transparent; text-shadow: rgba(255,255,255,0.5) 0px 3px 3px; margin: 30px 0 3px 0; ">יזמות</h2>
          <!-- <paper-material elevation="2" style="background: white; margin: 15px auto; padding: 10px 30px; max-width: 800px;">
          </paper-material> -->
          <!-- <projects-data projects="{{projects}}"></projects-data> -->
          <projects-view projects="[[_filterProjects(projects)]]" route="[[routeTail]]" ></projects-view>
<!--
          <paper-material id="pagespinner2" elevation="1" style="margin: 40px auto 40px auto; display: flex; background-color: white; width: 50px; height: 50px; border-radius: 50%;">
            <paper-spinner  active style="margin: auto; display: flex; background-color: white;"></paper-spinner>
          </paper-material> -->

        </div>
        <div class="about" style="">
          <h2 class="page-title" style="background-color: #666666; -webkit-background-clip: text; -moz-background-clip: text; background-clip: text; color: transparent; text-shadow: rgba(255,255,255,0.5) 0px 3px 3px; margin: 30px 0 20px 0; ">חברת גזית הנדסה בע"מ</h2>
          <paper-material elevation="2" style="background: white; margin: 15px auto; padding: 10px 30px; max-width: 800px;">
            <p style="direction: rtl; font-size: 18px;">
               - חברת בניה עם ניסיון עשיר בתכנון וביצוע עבודות הנדסאיות, בדפי החברה רשומים עשרות פרויקטים גדולים הן למגורים, לתעשייה, מרכזים ליוגיסטים, מבנה תעשיה. מבנה משרדים, מבנה ציבור, שחזור מבנים, תוספות על גגות, ועוד... החברה מתמחה בפרויקטים מסבוכים ומורכבים הן מבחינה הנדסית והן מבחינה ביצועית. גזית הנדסה משלבת תכנון מוקדם של הפרויקט, מתן פתרונות הנדסאים ויכולות ביצוע, תוך עמידה על לוחות הזמנים ועמידה על איכות בצוע ללא פשרות. גזית הנדסה עומדים לרשותה צוות מהנדסים מהמנוסים שיש בענף הן בתחום התכנון, והן מבחינה ביצועית. החברה מחזיקה מנהלי עבודה מהמעולים שיש בענף עם יכולות ביצוע גדולות אשר ביכולתם לבצע ולנהל כל אתר עם כל המורכבות שיש בו. גזית הנדסה מחזיקה בציוד הנדסי מהמתקדם שיש בענף (מנופי צריח, תבניות, מנופי הרמה, כלי עזר, מחסנים ועוד..) גזית הנדסה מחזיקה בעובדים קבועים מיומנים בתחום השלד אשר אין מצב שהיא נתקעת ללא כמות כוח אדם מספיקה כך שביכולתה לבצע כל פרויקט גדול עם כמות עובדים גדולה.
            </p>
          </paper-material>
          <h2 class="page-title" style="background-color: #666666; -webkit-background-clip: text; -moz-background-clip: text; background-clip: text; color: transparent; text-shadow: rgba(255,255,255,0.5) 0px 3px 3px; margin: 30px 0 20px 0; ">צוות</h2>
          <paper-material elevation="2" style="background: white; margin: 15px auto; padding: 10px 30px; max-width: 800px;">
          </paper-material>

        </div>
        <div class="contact" style="">
          <h2 class="page-title" style="background-color: #666666; -webkit-background-clip: text; -moz-background-clip: text; background-clip: text; color: transparent; text-shadow: rgba(255,255,255,0.5) 0px 3px 3px; margin: 30px 0 20px 0; ">צור קשר</h2>
          <paper-material elevation="2" style="background: white; margin: 15px auto; padding: 10px 30px; max-width: 800px;">
            <p style="direction: rtl;">
              חברת גזית הנדסה בע"מ
              <br>
              <br>
              <iron-icon icon="communication:location-on"></iron-icon>דויד המלך 4 בית גזית, ת.ד 447 - רמלה
              <br>
              <iron-icon icon="communication:phone"></iron-icon> טלפון: 08-9225529
              <br>
              <iron-icon icon="icons:print"></iron-icon> פקס: 08-9203032
              <br>
              <iron-icon icon="icons:mail"></iron-icon> gaziteng1@gmail.com
            </p>
          </paper-material>
          <!-- <paper-material elevation="2" style="background: white; margin: 15px auto; padding: 10px 30px; max-width: 800px;">
            <google-map latitude="37.77493" longitude="-122.41942" fit-to-markers>
              <google-map-marker latitude="37.779" longitude="-122.3892"
                  draggable="true" title="Go Giants!"></google-map-marker>
              <google-map-marker latitude="37.777" longitude="-122.38911"></google-map-marker>
            </google-map>
          </paper-material> -->


        </div>
        <!-- <div class="cranes" style="">
          <h2 class="page-title" style="background-color: #666666; -webkit-background-clip: text; -moz-background-clip: text; background-clip: text; color: transparent; text-shadow: rgba(255,255,255,0.5) 0px 3px 3px; margin: 30px 0 20px 0; ">גזית הנדסה בע"מ - מחלקת מנופים</h2>
          <paper-material elevation="2" style="background: white; margin: 15px auto; padding: 10px 30px; max-width: 800px;">

            <p style="direction: rtl;">
              הובלות, אחסנה ועבודות מנוף עד 220 טון, 60+ מטר לגובה
            </p>
            <p style="direction: rtl;">
              העברת מפעלים ומשרדים
            </p>
          </paper-material>
          <paper-material elevation="2" style="background: white; margin: 15px auto; padding: 10px 30px; max-width: 800px;">
            <p style="direction: rtl;">
              <iron-icon icon="communication:location-on"></iron-icon> הרצל 84 רמלה, ת.ד. 447
              <br>
              <iron-icon icon="communication:phone"></iron-icon> מנהל תפעול - עאדל: 050-4557002
              <br>
              <iron-icon icon="icons:print"></iron-icon> פקס: 08-9203032
            </p>
          </paper-material>
        </div> -->

  </szn-applayout>
</template><script>
(() => { 'use strict';
const SZN = window.SZN || {};
class PolymerElement {
  get behaviors() { // http://www.ericfeminella.com/blog/2016/03/25/polymer-behaviors-in-es6/
    return this._behaviors || (this._behaviors = []);
  }
  set behaviors(value) { this._behaviors = value;}
  beforeRegister() { // Element setup goes in beforeRegister instead of createdCallback.
    this.is = 'main-document-element';
    this.properties = { // Define the properties object in beforeRegister.
      sections: {
        type: Array,
        notify: true,
        value: function() {
          return [
            {
              'slug': 'about',
              'name': 'אודות'
            },
            {
              'slug': 'projects',
              'name': 'פרויקטים'
            },
            {
              'slug': 'initiator',
              'name': 'יזמות'
            },
            {
              'slug': 'contact',
              'name': 'צור קשר'
            }
          ];
        }
      },
      routeTail: {
        type: Object,
        notify: true,
      }
    };
  }
  ready() {
  }
  attached() {
  }
  _filterProjects(projects) {
    var result = projects.filter(function(project) {
        return (project.id == 6458) || (project.id == 6455) || (project.id == 6314);
    });
    return result;
  }
}
HTMLImports.whenReady(()=>{
  Polymer(PolymerElement); // Register the element using Polymer's constructor.
});
})();
</script></dom-module>
<main-document-element></main-document-element>
