'use strict';

var rawChickenData = [
  {
    title:          'White Leghorn',
    eggProduction:  '280',
    temperament:    'Nervous',
    weight:         '5 lbs',
    startLaying:    '16 weeks',
    publishedOn:    '2017-01-05',
    image:          '<img src="/Users/erdemkoral/Documents/301/cfpdx-301-portfolio/img/white_leghorn.jpg">',
    description:           '<p>This hardy breed lays large white eggs, and you can count on around 280 per year, as long as they have enough food, water and heat.</p> Although they make a better coup or penned bird than a free range, during the summer when the temps are up and the forage is readily available, they will also make a fine free range chicken too. One thing about White Leghorn, they chicken out easily (pun intended).</p>'
  },
  {
    title:          'Rhode Island Red',
    eggProduction:  '260',
    temperament:    'Hardy',
    weight:         '6,5 lbs',
    startLaying:    '18 weeks',
    publishedOn:    '2016-02-07',
    image:          '<img src="/Users/erdemkoral/Documents/301/cfpdx-301-portfolio/img/rhode_island_red.jpg">',
    description:           '<p>Easy to care for, they will produce around 260 eggs per year, as long as they have enough food, water and heat.</p><p>They are some of the best foragers, so they make excellent free range birds and penned chickens too, as long as you keep moving the pen around for ample forage. Although hardy, they can sometimes become bossy, especially with other smaller sized chickens, so keeping them separate will always be the best plan of action here.</p>'
  },
  {
    title:          'Golden Comet',
    eggProduction: '250',
    temperament:    'Gentle',
    weight:         '7.5 lbs',
    startLaying:   '15 weeks',
    publishedOn:    '2016-12-30',
    image:          '<img src="/Users/erdemkoral/Documents/301/cfpdx-301-portfolio/img/golden_comet.jpeg">',
    description:           '<p>This is one of the best cold hardy free range birds, and they will lay between 250 to 300 eggs per year.</p><p>The eggs are brown colored, and if you like brown eggs, a Golden Comet should be first on your list. They tolerate other birds well, make great pets because of their overall easy going disposition, but are not particularly broody.</p>'
  },
  {
    title:          'Ameraucana',
    eggProduction: '250',
    temperament:    'Broody',
    weight:         '4,5 lbs',
    startLaying:   '25 weeks',
    publishedOn:    '2016-11-20',
    image:          '<img src="/Users/erdemkoral/Documents/301/cfpdx-301-portfolio/img/ameraucana.jpg">',
    description:           '<p>These maybe the most fun birds to have when laying eggs.</p><p>Popularly known as the "Easter Egg Chicken," these birds lay multicolored eggs that are as delicious as they are colorful. They tolerate all climates and do well either penned or in coups. One thing to note. Among this breed is the "crossed beak" genetic disorder that will affect about 1 in 100 chicks.</p>'
  },
  {
    title:          'Barred Plymouth Rock',
    eggProduction: '280',
    temperament:    'Calm',
    weight:         '6.5 lbs',
    startLaying:   '18 weeks',
    publishedOn:    '2016-10-20',
    image:          '<img src="/Users/erdemkoral/Documents/301/cfpdx-301-portfolio/img/plymouth_rock.jpg">',
    description:           '<p>If you have kids and want one of the sweetest and most friendly laying chickens that there is, the Barred Plymouth Rock can not be beat.</p><p>They are terrific foragers, so they make great free range chickens, and they are fairly prolific egg layers, so you will always have fresh light brown or peachy colered eggs for the table. Best of all, they integrate well into other flocks of birds, and they are big, so you will not readily lose them.</p>'
  },
  {
    title:          'Golden Laced Wyandottes',
    eggProduction:  '200',
    temperament:    'Docile',
    weight:         '6 lbs',
    startLaying:    '18 weeks',
    image:          '<img src="/Users/erdemkoral/Documents/301/cfpdx-301-portfolio/img/wyandotte.jpeg">',
    description:           '<p>These big birds will give you a good egg layers, but the large size will also be good for the pot, if need be.</p><p>They are gentle, calm and are terrific foragers, which means they are some of the best chickens for free range. The extremely beautifully colorful chickens are a sight that few can resist, and they tend to be broody, so if you allow a clutch of eggs to hatch for a sustainable flock, the hen will do a good job with the chicks</p>'
  },
  {
    title:          'New Hampshire Red',
    eggProduction: '200',
    temperament:    'Aggressive',
    weight:         '6.5 lbs',
    startLaying:   '18 weeks',
    publishedOn:    '2016-11-22',
    image:          '<img src="/Users/erdemkoral/Documents/301/cfpdx-301-portfolio/img/new_hampshire_hen.gif">',
    description:           '<p>TIf you want a do-it-all chicken, then consider a New Hampshire Red.</p><p>They are not as prolific egg layers as some breeds, but they will still produce around 200 eggs per year. But if you are looking for an egg layer that is one of the tastier chickens for the pot, there are few better than these. They are also cold hardy and broody, and the hens make excellent mothers. The roosters may become disagreeable to one another, if there are not enough hens around. That said, if you want a sustaining flock of both egg laying and meat chickens, this type should be first on your list.</p>'
  },
  {
    title:          'Buff Orpington',
    eggProduction:  '200',
    temperament:    'Friendly',
    weight:         '7 lbs',
    startLaying:    '19 weeks',
    publishedOn:    '2016-11-24',
    image:          '<img src="/Users/erdemkoral/Documents/301/cfpdx-301-portfolio/img/buff_orpington.jpg">',
    description:           '<p>What is not to like about a Buff Orpington? These are big and beautiful birds that actually make great pets.</p><p> Granted, they are only capable of laying about 150 eggs per year, but if you have kids, or if you are actively interested in a chicken more for its docile nature, this is a wonderful choice. They are best in a confined setting, like a penned in area or a coup, but under the right circumstances, they also make good free range birds. However, their coats are fluffy and retain moisture, so they will always need a place of shelter, and they do not fly very well, so if they are free ranged, predators might become an issue.</p>'
  },
  {
    title:          'Australorp',
    eggProduction:  '250',
    temperament:    'Hardy',
    weight:         '5 lbs',
    startLaying:    '22 weeks',
    publishedOn:    '2017-1-20',
    image:          '<img src="/Users/erdemkoral/Documents/301/cfpdx-301-portfolio/img/australorp.jpg">',
    description:           '<p>Australorp is one of the human-friendliest chicken breeds, they lay fairly amount of eggs, they have quite a lot of meat, and their color is just gorgeous. ​If you are a total beginner, Australorp might be the best choice for you.</p><p>One thing, though, Australorp is not the easiest to raise with other breeds. They tend to bully the others and sometimes eat their eggs.  Best of all, they integrate well into other flocks of birds, and they are big, so you will not readily lose them.</p>'
  },
  {
    title:          'Speckled Sussex',
    eggProduction: '250',
    temperament:    'Docile',
    weight:         '8 lbs',
    startLaying:   '16 weeks',
    publishedOn:    '2017-04-23',
    image:          '<img src="/Users/erdemkoral/Documents/301/cfpdx-301-portfolio/img/speckled_sussex.jpg">',
    description:           '<p>One of the heaviest layers, not only because they lay more than 250 eggs per year but also because the females weight almost 8 lbs in average. However, contrast to their size, Sussex does not need big spaces.</p><p>They are gentle, calm and are terrific foragers, which means they are some of the best chickens for free range. Be careful when raising Sussex with other breeds. They are usually the target of bullies.</p>'
  }
];
