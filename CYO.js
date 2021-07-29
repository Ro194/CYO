
window.onload = onDocumentReady;
var rooms = {
  "room0":{ "description":"<b>East Meadow</b><br> You have entered the East meadow."+
  " Upon your approach, a small animal darts for cover in the underbrush, leaving \
  rustling leaves in its wake. Green, leafy stalks tower above your head. In contrast \
  with the stoic Galen Stone Tower, the grasses here flow and bend in the slight\
   breeze.  Birds chirp in the distance, where they throng among the ancient \
   maples lining the meadow perimeter.<br>"+
   "--Here you find:<br>\
   A flooded <b>path(E)</b><br>\
   A purple <b>flower(E)</b><br>\
   --You can go<b> Northwest</b> to Paramecium Pond or <b>Up</b> to the \
   Kettle.--\
   <br>\
   <br>",
   "directions":{
     "northwest":"room1",
     "northeast":"room6"
   }},





  "room1":{ "description":"<b>Paramecium Pond</b><br> You have entered Paramecium Pond. With each\
   footfall, water wells up from the boggy earth and laps at the top of your \
   shoes. Behind you are yellow grasses, speckled with the iridescent sheen of a \
   thousand insect wings. If you look long enough, maybe you’ll see the creatures \
   those wings belong to. The pond calls to you from up ahead. Lily pads float \
   lazily across its surface. The geese seem to enjoy the peaceful waters as much \
   as you do. Their feathers litter the ground. <br>"+
   "--Here you find:<br>\
   Goose <b>Feather(T)</b><br>\
   Tall <b>Grass(E)</b><br>\
   <b>Pond Bench(E)</b><br>\
  --If you have found the waders, you can use them here!--<br> \
   --You can go<b> Southeast</b> to East Meadow or \
   <b>Northeast</b> to the Old Labyrinth.--\
   <br><br>",
   "directions":{
     "northeast":"room2",
     "southeast":"room0"
   }},




  "room2":{ "description":"<b>Labyrinth</b><br> You have entered the Labyrinth. The crab apple \
  trees and swaying yellow grasses give way to reveal a shallow stream. It is \
  the Silver Thread, which you leap over to stand before the decaying rings of \
  this spiritual relic. The purposefully arranged wooden stumps are now largely\
   concealed by plant growth but you spy an opening.<br>"+ "--Here you find:<br>\
    Labyrinth<b> Opening(E)</b><br>\
    <b>Silver Thread(E)</b><br>\
    --You can go<b> Southwest</b> to Paramecium or \
    <b>East</b> to Mirror Pond.--\
    <br><br>",
    "directions":{
      "southwest":"room1",
      "East":"room3"
    }},



  "room3":{ "description":"<b>Mirror Pond</b><br> You have entered Mirror Pond. To your \
  surprise, the rumble from the nearby road does nothing to disturb the \
  tranquility of this small pool. Pond weed covers the water’s surface. Every \
  so often, a small head breaks through the lime-colored growth alongside a \
  chorus of throaty croaks. A large tree looms over half the pond. Its low \
  hanging branches greet the water below.<br>"+"--Here you find:<br>\
  <b>Weeping Cherry(E)</b><br>\
  Bittersweet<b> Clearing(E)</b><br>\
--If you have found the waders, you can use them here!--<br> \
  --You can go<b> West</b> to Labyrinth or \
  <b>East</b> to Waterfall.--\
  <br><br>",
  "directions":{
    "West":"room2",
    "East":"room4"
  }},



  "room4":{ "description":"<b>Waterfall</b><br> You have entered\
   the Waterfall. Here stands the origin of the Silver Thread stream that snakes\
    its way from this point all the way to Paramecium Pond. The gurgling of \
    rushing water is unmistakable. Not much lives here, but there’s beauty to be \
    found in everything.<br> "+ "--Here you find:<br>\
    <b>Bridge(E)</b><br>\
    <b>Waterfall(E)</b><br>\
--If you have found the waders, you can use them here!--<br> \
    --You can go<b> West</b> to Mirror Pond or \
    <b>South</b> to Azalea Hill.--\
    <br><br>",
    "directions":{
      "West":"room3",
      "South":"room5"
    }},



  "room5":{"description":"<b>Azalea Hill</b><br> You have entered Azalea Hill. You stand at the\
   base of the incline and your gaze tilts up to \
  capture a view of sky above the open space. Though captivating, the sky can \
  only hold your attention for so long. The vibrant colors of azaleas in full \
  bloom leave you mesmerized. <br>"+ "--Here you find:<br>\
  Top of <b>Hill(E)</b><br>\
  <b>Azalea(T)</b><br>\
  --You can go<b> North</b> to the Waterfall or \
  <b>Downhill</b> to the Kettle.--\
  <br><br>",
  "directions":{
    "North":"room4",
    "Down":"room6"
  }},



  "room6":{"description":"<b>The Kettle</b><br> You have entered the Kettle. The land is near \
  flat in this part of the arboretum as a result of glacial activity from thousands of\
   years ago. A slight bevel, however, has led to the \
  creation of a densely vegetated pool at the bottom of the slope. Behind you, \
  Dogwood trees heavy with white bracts shower them down like snow to the right \
  of a wooden bench.<br>"+"--Here you find:<br>\
  <b>Kettle Bench(E)</b><br>\
  <b>Pool(E)</b><br>\
  --You can go<b> Down</b> to Meadows or \
  <b>Uphill</b> to Azalea Hill.--\
  <br><br>",
  "directions":{
    "Southwest":"room0",
    "Up":"room5"
  }},
}



var map = [];

map[0] = 'room0';
map[1] = "room1";
map[2] = "room2";
map[3] = "room3";
map[4] = "room4";
map[5] = "room5";
map[6] = "room6";


var mapPath = [];
mapPath[0] = [false, true, true, false, false, false, false, false];
mapPath[1] = [false, true, false, false, true, false, false, false];
mapPath[2] = [false, false, false, false, false, true, true, false];
mapPath[3] = [false, false, false, false, false, false, true, true];
mapPath[4] = [false, false, false, true, false, false, false, true];
mapPath[5] = [true, false, false, false, false, true, false, false];
mapPath[6] = [false, true, false, false, false, true, false, false];



var mapLocation = 0;

function toggleImage() {
  var image = document.getElementById('image');
  image.classList.toggle('hidden');
}

function toggleImage2() {
  var image = document.getElementById('image2');
  image2.classList.toggle('hidden');}

var mapButton1 = document.getElementById('mapButton')
mapButton.addEventListener('click', toggleImage)

var interactButton = document.getElementById('intButton')
intButton.addEventListener('click', toggleImage2)


function onDocumentReady() {
var gameText = document.getElementById('gameText');
  gameText.innerHTML= rooms.room0.description;

  document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        var actionValue= document.getElementById('userInput').value.toLowerCase();
        switch(actionValue) {

      //azalea hill to waterfall
          case "north":
            if (mapPath['mapLocation']){
              mapLocation -= 1;
              var where= map[mapLocation];
              gameText.innerHTML+= rooms[where].description;
            };
            break;


//waterfall to azalea hill
          case "south":
            if (mapPath['mapLocation']=true && map[4]){
              mapLocation += 1;
              var where= map[mapLocation];
              gameText.innerHTML+= rooms[where].description;
            };
            break;

//meadow to paramecium
          case "northwest":
            if (mapPath['mapLocation']=true){
              mapLocation += 1;
              var where= map[mapLocation];
              gameText.innerHTML+= rooms[where].description;
            };
            break;

//Paramecium to labyrinth
          case "northeast":
          if (mapPath['mapLocation']=true && rooms['room1']){
            mapLocation += 1;
            var where= map[mapLocation];
            gameText.innerHTML+= rooms[where].description;
          };
          break;

//labryinth to paramecium
          case "southwest":
          if (mapPath['mapLocation']=true && rooms['room2']){
            mapLocation -= 1;
            var where= map[mapLocation];
            gameText.innerHTML+= rooms[where].description;
          };
          break;

//kettle to meadow
          case "down":
          if (mapPath['mapLocation']=true && rooms['room6']){
            mapLocation -= 6;
            var where= map[mapLocation];
            gameText.innerHTML+= rooms[where].description;
          };
          break;


//azalea hill to kettle
          case "downhill":
            if (mapPath['mapLocation']=true && map[5]){
              mapLocation += 1;
              var where= map[mapLocation];
              gameText.innerHTML+= rooms[where].description;
            };
            break;

//meadow to kettle
            case "up":
            if (mapPath['mapLocation']=true && map[0]){
              mapLocation += 6;
              var where= map[mapLocation];
              gameText.innerHTML+= rooms[where].description;
            };
            break;


//kettle to azalea hill
            case "uphill":
            if (mapPath['mapLocation']=true && map[6]){
              mapLocation -= 1;
              var where= map[mapLocation];
              gameText.innerHTML+= rooms[where].description;
            };
            break;


//paramecium to meadow
          case "southeast":
            if (mapPath['mapLocation']=true){
              mapLocation -= 1;
              var where= map[mapLocation];
              gameText.innerHTML+= rooms[where].description;
            };
            break;


//mirror pond to labyrinth
          case "west":
            if (mapPath['mapLocation']=true && map[3]){
              mapLocation -= 1;
              var where= map[mapLocation];
              gameText.innerHTML+= rooms[where].description;
            };

            //waterfall to mirror pond
            break;
            if (mapPath['mapLocation']=true && map[4]){
              mapLocation -= 1;
              var where= map[mapLocation];
              gameText.innerHTML+= rooms[where].description;
            };
            break;

//labyrinth to mirror pond
          case "east":
            if (mapPath['mapLocation']=true && map[2]){
              mapLocation += 1;
              var where= map[mapLocation];
              gameText.innerHTML+= rooms[where].description;
            };

            // mirror pond to waterfall
            break;
            if (mapPath['mapLocation']=true && map[3]){
              mapLocation += 1;
              var where= map[mapLocation];
              gameText.innerHTML+= rooms[where].description;
            };
            break;

            //a flooded path
              case "examine path":
              gameText.innerHTML+= "<b>Flooded Path</b><br>"+"Water tends to collect between the curving halves \
              of the meadow after heavy rain. Luckily for you, your calm demeanor and still \
              stance left you undetected by the creatures who come to drink and rest at the\
               gathering spot. A pair of bunnies stretch under the warm sun. If you wish to \
               get a closer look, examine <b>spot(E)</b>, but you may scare away the animals.\
               <br><br>";
              break;

              case "examine spot":
              gameText.innerHTML+= "<b>Spot</b><br>"+"Oh no! The bunnies \
              bristle at your approach \
              before turning tail and darting for cover.\
              <br><br>";
              break;

              case "examine flower":
              gameText.innerHTML+="<b>Purple Flower</b><br>"+"A honeybee sits \
              proudly atop an aster, \
              coating its hind legs in sticky pollen. You notice there are many \
              colorful flowers in this meadow upon closer inspection. The \
              purples, yellows, and pinks peek out from the sea of green. It \
              couldn’t hurt to smell a few the next time you walk through.\
              <br><br>"
              break;

              case "take feather":
              gameText.innerHTML+= "<b>Goose Feather</b><br>"+"The gray barbs feel smooth between your \
              fingers. The thick, white tip could easily be turned into a quill\
               with a few choice cuts.\
               <br><br>"
              break;

              case "examine grass":
              gameText.innerHTML+= "<b>Tall Grass</b><br>"+"This place is abuzz with activity. \
              Dragonflies, previously hiding amongst the grass, take to the \
              skies in jubilant celebration of warm weather. The Swallows in the\
               surrounding trees are celebrating too…they swoop into the fray to \
               feast.\
               <br><br>"
              break;

              case "examine pond bench":
              gameText.innerHTML+= "<b>Pond Bench</b><br>"+"You take a moment to rest and look out over\
               the pond. Your presence startles the nearby geese, who slide into \
               the water with a few annoyed honks. To your right is a notebook on \
               a wooden stand attached to the bench. Behind you is a shrub with \
               clusters of hanging berries.<br>\
               --Here You Find:<br>\
               <b>Notebook(E)</b><br>\
               Blueberry <b>shrub</b>(E).\
               <br><br>"
              break;

              case "examine shrub":
              gameText.innerHTML+= "<b>Blueberry Shrub</b><br>"+"Though many berries are still green, you\
               discover a few ripe berries within your reach. You cup a hand \
               and fill it berry by berry. The skins of the fruit range from \
               deep blues to an almost grape-like purple. The berries may differ\
                in appearance, but they all have the sweet taste of summer when eaten.\
               <br><br>"
              break;

              case "examine notebook":
              gameText.innerHTML+= "<b>Notebook</b><br>"+"Condensation rolls off of the plastic bag the \
              book is contained in when you lift it from its perch. Inside, the\
               notebook’s weather worn pages have gone soft--warped by time and \
               moisture. A bottle of ink and an xacto knife also lie at the bottom\
                of the bag. If you have the goose feather, you can make a quill(M)\
                 and write in the notebook! Otherwise, examine pages(E).\
               <br><br>"
              break;

              case "examine pages":
              gameText.innerHTML+= "<b>Pages</b><br>"+"The notebook is filled with drawings, notes, \
              and scribbles from passersby. Some are joyous, some are sad, some \
              are comical…all chronicle snapshots into the lives of Wellesley \
              students who have sat and pondered in the same spot you’re sitting\
               in now. One day, maybe you too will leave a mark here for someone\
                else to find!<br><br>"
              break;

              case "make quill":
              gameText.innerHTML+= "<b>Quill</b><br>"+"The xacto knife makes short work of the goose \
              feather’s shaft. You carve a precise “u” shape on the tip and trace \
              a thin line down the middle. Take a quick glance at the book(E) \
              while you soak your quill tip in the ink jar!<br><br>"
              break;

              case "examine book":
              gameText.innerHTML+= "<b>Book</b><br>"+"The notebook is filled with drawings, notes,\
               and scribbles from passersby. Some are joyous, some are sad, \
               some are comical…all chronicle snapshots into the lives of Wellesley \
               students who have sat and pondered in the same spot you’re sitting\
                in now. Now, you too will leave a mark here for someone else to \
                find! Get writing! What will YOU leave behind?<br><br>"
              break;


              case "examine opening":
              gameText.innerHTML+= "<b>Opening</b><br>"+"Following the spiraling trail becomes \
              increasingly difficult as you encounter gaping areas of decay \
              and roadblocks of overgrowth. Nevertheless, you reach the center. \
              Embedded in the earth is an ancient tree stump of epic proportions. \
              On the surface of the stump is a shallow crevice filled with miscellaneous \
              <b>items(E)</b>.<br><br>"
              break;

              case "examine items":
              gameText.innerHTML+= "<b>Miscellaneous Items</b><br>"+"--Here you find:<br>\
              A smooth, gray <b>rock(E)</b> covered in a painted message<br>\
              A soiled <b>photograph</b>(E)<br><br>"
              break;

              case "examine rock":
              gameText.innerHTML+= "<b>Rock</b><br>"+"In black paint, the rock quotes: “I am \
              magical and deserving of sweetness.” That’s definitely an affirmation \
              to remember! You tuck it back into the crevice. There it will \
              remain as one more sweet thing to be welcomed into the lives of \
              wanderers to come.<br><br>"
              break;

              case "examine photograph":
              gameText.innerHTML+= "<b>Photograph</b><br>"+"You hold a grimy photo of the labyrinth in \
              its early days. Peace emanates from the tranquil spot encircled by\
               fairy lights.<br><br>"
              break;

              case "examine silver thread":
              gameText.innerHTML+= "<b>Silver Thread</b><br>"+"Sun-warmed water trickles by-- twisting and \
              curving along a North/South path as far as the eye can see. Edible \
              chocolate mint grows in fragrant clusters along the sides of the \
              stream. These square-stemmed plants thrive in sunny patches, \
              alongside Forget-me-nots, asters, and clovers, but you find a \
              few flattened gaps in the shade. These make it easy to hop across \
              the Silver Thread should the need arise.<br> \
              --If you have found the waders, you can use them here!--<br><br>"
              break;

              case "examine weeping cherry":
              gameText.innerHTML+= "<b>Weeping Cherry</b><br>"+"Despite the tree’s imposing stature, you \
              dare a closer look. You brush aside a cluster of branches to find \
              that the area under the Weeping Cherry is incredibly spacious and\
               well-shaded from the sun. The world goes quiet in your insular \
               grotto – save for the voices beckoning from the water’s edge.<br>\
               --Here You Find:<br>\
               <b>Stumps(E)</b><br>\
               Pond’s <b>Edge(E)</b><br>\
               <b>Cherry(T)</b><br><br>"
              break;

              case "examine stumps":
              gameText.innerHTML+= "<b>Stumps</b><br>"+" Several stumps are scattered around the \
              base of the tree. These must’ve made nice seating in their prime.\
               Now they slowly crumble… eaten from the inside out by earthworms.\
                Better bring your own chair or a picnic blanket next time!<br><br>"
              break;

              case "examine edge":
              gameText.innerHTML+= "<b>Pond's Edge</b><br>"+"You follow the sound of croaks to the water’s\
               edge. Behold, a frog! Your footsteps send it careening into the \
               pond weed with a splash. This disturbance sends a collection of \
               resting chickadees into flight. Their small gray and black forms \
               seem like blurs as they flutter higher into the weeping branches.<br><br>"
              break;

              case "take cherry":
              gameText.innerHTML+= "<b>Cherry</b><br>"+"You pluck a small, red berry from a branch \
              and take a nibble. It is bitter, but it won’t hurt you. Unfortunately,\
               weeping cherries taste bad enough to make just about anyone cry. \
               Unless you’re a chipmunk!<br><br>"
              break;

              case "examine clearing":
              gameText.innerHTML+= "<b>Bittersweet Clearing</b><br>"+"A grassy path runs perpendicular to the Weeping\
               Willow tree. Following it leads to a shady grove filled with \
               pointy-leaved vines. The vines are tightly coiled around trees, \
               shrubs, and even each other!<br>\
               --Here You Find:<br>\
               Bittersweet <b>Vine(T)</b><br><br>"
              break;

              case "take vine":
              gameText.innerHTML+= "<b>Bittersweet Vine</b><br>"+"When pulled from the ground, invasive \
              Bittersweet is a pliable and useful material for weaving. You sit \
              and weave--enjoying the sunshine all the while.<br><br>"
              break;

              case "examine bridge":
              gameText.innerHTML+= "<b>Bridge</b><br>"+"Tucked among some trees to your right is an\
               arched stone bridge. It is flanked on all sides by red Sawara \
               False cypresses. Underneath the bridge is slow moving water.<br>\
               --Here You Find:<br>\
               Bag of <b>Clementines(T)</b><br>\
              <b> Wader(T)</b><br><br>"
              break;

              case "take wader":
              gameText.innerHTML+= "<b>Wader</b><br>"+"A biology class must’ve left this behind. \
              The heavy, waterproof suit has a built-in pair of boots and \
              suspenders that go over your shoulders. The left shoulder, \
              however, is broken so you continue on with one strap. It sure \
              won’t stop you from going for a wade in <b>Paramecium Pond</b>, the <b>Silver\
               Thread</b>, <b>Mirror Pond</b>, the <b>Waterfall</b>, or the <b>Vernal Pool</b>!<br>\
               --Your wader allows you to enter these bodies of water using \
               <b>wade into(W)</b> [insert name].--<br><br>"
              break;

              case "take clementines":
              gameText.innerHTML+= "<b>Bag of Clementines</b><br>"+"These must’ve \
              been left by a biology class. Clementines are often used to measure \
              water speed because of their buoyant properties. You can keep the \
              clementines or toss <b>a clementine(Ts)</b> in the water.<br><br>"
              break;

              case "toss a clementine":
              gameText.innerHTML+= "<b>Tossed Clementine</b><br>"+"The fruit slowly \
              floats by, inch by inch, until it becomes wedged in a tangle of \
              branches. Maybe toss <b>again(Ts)</b>?<br><br>"
              break;

              case "toss again":
              gameText.innerHTML+= "<b>Tossed Clementine</b><br>"+"The fruit \
              slowly floats by, inch by inch. You crouch on the bank of the \
              Silver Thread, waiting, until it passes under the bridge and out \
              of view. If only you had a yard stick and a timer!<br><br>"
              break;

              case "examine waterfall":
              gameText.innerHTML+= "<b>Waterfall</b><br>"+"The water is cool to\
               the touch. At the very top, water seems to gush out from a single\
                break in a rock formation. Is it natural...or is there an \
                alternative source?<br>\
              --If you have found the waders, you can use them here!--<br><br>"
              break;

              case "examine hill":
              gameText.innerHTML+= "<b>Top of Hill</b><br>"+"A gap in the dense \
              tree cover outlines a yellow house in the distance. Before you is \
              a solid stone bench. It is flanked by towering bushes, which give \
              it a throne-like appearance. An inscription on the bench reads: \
              “In Memory of Margaret C. Ferguson.”<br><br>"
              break;

              case "take azalea":
              gameText.innerHTML+= "<b>Azalea</b><br>"+"Pink bundles abound \
              across the length of the hill. You pluck an azalea and tuck it \
              behind your ear. How beautiful!<br><br>"
              break;

              case "examine kettle bench":
              gameText.innerHTML+= "<b>Kettle Bench</b><br>"+"A lone bench \
              shelters under the branches of several different <b>trees(E)</b>. It \
              faces the roadway. During the day, birdsong and open sky envelop\
               the area, but when the sun goes down, this bench is a front row \
               seat to the stars and a lightshow made by the headlights of \
               passing cars.<br><br>"
              break;

              case "examine trees":
              gameText.innerHTML+= "<b>Star-shaped Leaves</b><br>"+"Star-shaped leaves \
              overshadow the front of the bench.<br><br>"
              break;

              case "examine pool":
              gameText.innerHTML+= "<b>Vernal Pool</b><br>"+"Welcome to one of \
              Wellesley’s two vernal pools. A concrete ring encircles the mass \
              of plants and murky water. The glint of a trail camera can be seen \
              from the base of a tree not too far from the mouth of the pool. \
              There is much life to be found here... frogs, the occasional duck,\
               and now you! Stay awhile and imagine what you could find with a \
               little bit of patience. <br>\
              --If you have found the waders, you can use them here!--<br><br>"
              break;

              case "wade into paramecium pond":
              gameText.innerHTML+= "<b>Paramecium Pond Wading</b><br>"+"Tread \
              carefully! This pond is too deep to risk wading far into. Instead,\
               you skirt the perimeter and go no deeper than your ankles. Lily \
               pads knock gently against your boots.<br><br>"
              break;

              case "wade into silver thread":
              gameText.innerHTML+= "<b>Silver Thread Wading</b><br>"+"The Thread\
               wells up playfully along the sides of your boots as you splash \
               along its length, stepping over the occasional pile of leaves. \
               Water striders accompany you on your journey. They skate \
               effortlessly on the water’s surface, almost daring you to keep \
               up.<br><br>"
              break;

              case "wade into mirror pond":
              gameText.innerHTML+= "<b>Mirror Pond Wading</b><br>"+"Tread carefully!\
               Frogs dash for cover as your boots plunge through the mud and weeds. \
               The muck grips the soles of your wader and you realize within a \
               few steps that this small pond, though shallow, has mud that\
                runs deep.<br><br>"
              break;

              case "wade into waterfall":
              gameText.innerHTML+= "<b>Waterfall Wading</b><br>"+"Rocks crunch \
              and shift beneath your feet. Frigid water streaks white around \
              your calves, bubbling from the speed of the flow.<br><br>"
              break;

              case "wade into vernal pool":
              gameText.innerHTML+= "<b>Vernal Pool Wading</b><br>"+"Tread carefully!\
               The abundant plant growth provides ample opportunity to stumble \
               into the murky waters below. Your boots are near submerged by \
               the time you reach the center of the pool. Mud suctions onto \
               your wader and slows your pace immensely, but slow motion gives\
              you plenty of time to creature watch.<br><br>"
              break;
        }
        }
});
}
