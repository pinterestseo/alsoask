import { type Article } from '@/types';

export const articles: Record<string, Article> = {
  'can-dogs-eat-bacon': {
    title: 'Can Dogs Eat Bacon?',
    category: 'Pets',
    snippet: "No, dogs shouldn't eat bacon (sorry pooches of the world). It's not advised even as a treat because bacon is very fatty with sky-high salt content.",
    featuredImage: {
      url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
      alt: "Cute dog looking at camera with hopeful expression",
      caption: "While dogs love bacon, it's not the healthiest treat for them"
    },
    content: `
      <p>Yes, we know it's delicious, and dogs love it just as much as we humans do, but there are alternative meaty treats that you can feed to your ravenous dog without the guilt or risks (read to the end!).</p>

      <p>Read on for all your questions answered on whether bacon is bad for dogs, what the health risks are, and what to feed your dog instead of bacon.</p>

      <h2 id="is-bacon-bad">Is bacon bad for dogs?</h2>
      <p>It kind of is, yes. Bacon is basically a cured, processed meat full of fat and salt - a treat for humans, so definitely detrimental to a dog's health. The high salt content means it could dehydrate dogs or cause toxicity over time; while the high fat content could lead to weight gain or cause havoc to dogs with diabetes or pancreatitis.</p>

      <h3 id="health-benefits">Are there any health benefits?</h3>
      <p>No, not really. Though there is some protein present in bacon as it's sourced from pork, it's not really enough to offset the amount of fat and salt - especially for dogs, who have a more delicate digestive system than humans.</p>

      <h2 id="puppies-bacon">Can puppies eat bacon?</h2>
      <p>No, puppies shouldn't eat bacon. Puppies need lots of protein-rich, nutritious foods as they're growing so much during this early stage of life - bacon will just cause discomfort in their tiny tummies.</p>

      <h2 id="when-unsafe">When is bacon unsafe for dogs?</h2>
      <ul>
        <li>Bacon isn't toxic to dogs, so it won't poison them if they snaffle a piece off your plate when you aren't looking. That said, it's unsuitable for dogs even as a treat - the salt and fat content is simply too high, so in that respect it's always unsafe.</li>
        <li>If your dog's eaten a lot of bacon, keep an eye on them. They'll likely be sick or experience diarrhoea, but if they experience any dodgy symptoms to the extreme, take them to a vet straight away.</li>
        <li>If your pooch has a health condition such as pancreatitis, or a heart condition, it's very risky to feed them bacon.</li>
      </ul>
    `,
    headings: [
      { id: 'is-bacon-bad', text: 'Is bacon bad for dogs?', level: 2 },
      { id: 'health-benefits', text: 'Are there any health benefits?', level: 3 },
      { id: 'puppies-bacon', text: 'Can puppies eat bacon?', level: 2 },
      { id: 'when-unsafe', text: 'When is bacon unsafe for dogs?', level: 2 }
    ]
  },
  'how-to-start-running': {
    title: 'How to Start Running: A Complete Guide for Beginners',
    category: 'Health',
    snippet: 'Starting a running routine can be intimidating, but with the right approach, anyone can become a runner. Learn how to begin safely and build your endurance gradually.',
    featuredImage: {
      url: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5",
      alt: "Person running on a trail during sunrise",
      caption: "Start your running journey with proper guidance and technique"
    },
    content: `
      <h2 id="getting-started">Getting Started with Running</h2>
      <p>Before you start running, it's important to have the right gear and mindset. Begin with a good pair of running shoes and comfortable clothing.</p>

      <h2 id="proper-form">Proper Running Form</h2>
      <p>Maintaining good form helps prevent injuries and improves efficiency. Keep your head up, shoulders relaxed, and arms at a 90-degree angle.</p>

      <h2 id="training-plan">Beginner's Training Plan</h2>
      <p>Start with a walk-run program. Alternate between 1 minute of running and 2 minutes of walking. Gradually increase your running intervals as you build endurance.</p>

      <h2 id="common-mistakes">Common Beginner Mistakes</h2>
      <ul>
        <li>Starting too fast</li>
        <li>Skipping warm-up</li>
        <li>Not staying hydrated</li>
        <li>Ignoring rest days</li>
      </ul>
    `,
    headings: [
      { id: 'getting-started', text: 'Getting Started with Running', level: 2 },
      { id: 'proper-form', text: 'Proper Running Form', level: 2 },
      { id: 'training-plan', text: "Beginner's Training Plan", level: 2 },
      { id: 'common-mistakes', text: 'Common Beginner Mistakes', level: 2 }
    ]
  },
  'houseplant-care-guide': {
    title: 'Essential Guide to Houseplant Care',
    category: 'Lifestyle',
    snippet: 'Learn how to keep your indoor plants thriving with proper watering, lighting, and care techniques. Perfect for both beginners and experienced plant parents.',
    featuredImage: {
      url: "https://images.unsplash.com/photo-1463320726281-696a485928c7",
      alt: "Various houseplants in decorative pots",
      caption: "Create your own indoor jungle with proper plant care knowledge"
    },
    content: `
      <h2 id="basic-needs">Basic Plant Care Needs</h2>
      <p>Understanding the fundamental needs of houseplants is crucial for their survival. This includes proper light, water, and humidity levels.</p>

      <h2 id="watering-tips">Watering Guidelines</h2>
      <p>Different plants have different watering needs. Learn to check soil moisture and establish a watering schedule that works for each plant.</p>

      <h2 id="light-requirements">Light Requirements</h2>
      <ul>
        <li>Direct sunlight: 6+ hours of sun</li>
        <li>Bright indirect light: Near window but no direct sun</li>
        <li>Low light: Few feet from window</li>
      </ul>

      <h2 id="common-problems">Common Problems and Solutions</h2>
      <p>Learn to identify and treat common issues like yellowing leaves, root rot, and pest infestations.</p>
    `,
    headings: [
      { id: 'basic-needs', text: 'Basic Plant Care Needs', level: 2 },
      { id: 'watering-tips', text: 'Watering Guidelines', level: 2 },
      { id: 'light-requirements', text: 'Light Requirements', level: 2 },
      { id: 'common-problems', text: 'Common Problems and Solutions', level: 2 }
    ]
  },
  'can-dogs-eat-chips': {
  title: 'Can dogs eat Chips?',
  category: 'Pets',
  snippet: "If you’re talking about your standard ‘chip shop’ portion of salt and vinegar soaked chips, then the answer is no! A steaming plate of chips is definitely a treat for humans, so as you’d probably guess, they’re not beneficial to dogs.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_CHIPS_500x_crop_center.jpg?v=1710851717",
    alt: "Can dogs eat Chips?",
    caption: "Are chips good for dogs?"
  },
  content: `
<div>If you’re talking about your standard ‘chip shop’ portion of salt and vinegar soaked chips, then the answer is no! A steaming plate of chips is definitely a treat for humans, so as you’d probably guess, they’re not beneficial to dogs.</div>
      <p>For this blog post, ‘chips’ refers to chipped potatoes/fries/any hot potato side that you’d serve at dinnertime.  Of course, there are different kinds of chips you could mean when you ask this question (banana chips, crisps, tortilla chips!), so we’ll advise on different kinds of chips later in the article.</p>
      <h2 id="are-chips-good-for-dogs">Are chips good for dogs?</h2>
      <p>Sadly, chips aren’t all that beneficial for a dog’s health due to their high fat and carbohydrate content. In lots of cases, they’re also probably covered in salt. Though there isn’t any harm in sharing one or two chips with your pooch (providing they aren’t drenched in salt and vinegar), chips won’t provide any nutritional benefits, and definitely shouldn’t be regarded as a regular treat. It’s best to stick to healthier foods, mentioned later in the article.</p>
      <h2 id="when-are-chips-unsafe-for-dogs">When are chips unsafe for dogs?</h2>
      <p>Chips are high in fat and carbohydrates and often flavoured with salt, so though plain chips aren’t toxic to dogs, they’re considered unsafe if fed regularly. The fat content from chips can lead to weight gain and digestive issues in dogs, while too many salty foods can lead to dehydration or even kidney damage.</p>
      <h2 id="can-puppies-eat-chips">Can puppies eat chips?</h2>
      <p>No, don’t feed chips to your growing puppy. At this early stage they need nutritious, protein-rich foods to support their rapid growth. Some healthy, grain-free food for puppies is a much safer bet.</p>
      <h3 id="can-dogs-be-allergic-to-chips">Can dogs be allergic to chips?</h3>
      <p>It’s unlikely your dog will be allergic to plain potato chips, however the high fat content in chips can cause your pooch to have digestive problems, akin to a food allergy. If you notice diarrhoea or vomiting, bloating, stomach pain or lethargy after feeding your dog chips, it’s best to avoid giving them as a snack in future.</p>
      <h3 id="can-chips-make-dogs-sick">Can chips make dogs sick?</h3>
      <p>Yes, especially if they’re covered in salt or other flavourings, which should definitely be avoided. If chips are fed to your dog often, the high fat and carbohydrate content will definitely cause unwanted effects in your dog like weight gain, lethargy, slowness and bowel issues. Though one or two won’t harm them, they’re not a healthy choice for a dog.</p>
      <h2 id="how-to-safely-give-chips-to-your-dog">How to safely give chips to your dog?</h2>
      <p>The only way to safely give chips to your dog is to share one or two chips, which are plain and not salted. Do this rarely as opposed to regularly, as chips carry no nutritional value to your pooch.</p>
      <h3 id="what-kinds-of-chips-can-dogs-eat">What kinds of chips can dogs eat?</h3>
      <p>We know that the word ‘chips’ can refer to all kinds of foods, so here are some variants you might be wondering about…</p>
      <h3 id="can-dogs-eat-banana-chips">Can dogs eat banana chips?</h3>
      <p>It depends. It’s not a standard snack for a pooch (you might like to feed fresh banana instead), but banana chips aren’t toxic to dogs, so long as they’re natural without any dodgy additives or preservatives. Check the ingredients to be sure about this. Avoid the coated banana chips, such as the chocolate or yoghurt-covered variety - these can definitely be dangerous for dogs.</p>
      <h3 id="can-dogs-eat-crisps">Can dogs eat crisps?</h3>
      <p>No. You might be eating a packet of tasty crisps next to your pup and thinking ‘can dogs eat prawn cocktail crisps?’ or ‘are salt and vinegar crisps okay for dogs to eat?’ Though these are a common treat for humans, crisps are high in sodium and saturated fat, so they don’t offer any nutritional value for our beloved pooches. Don’t offer it to your dog even as a treat; it’s best they don’t get a taste for crisps, whether they’re chicken flavour or cheese and onion.</p>
      <h3 id="can-dogs-eat-tortilla-chips">Can dogs eat tortilla chips?</h3>
      <p>Ideally no. The odd tortilla chip shouldn’t do your dog much harm, but it won’t do them much good either. Tortilla chips are usually high in salt and fat, without many nutrients besides! They’re a treat for humans, so dogs should generally avoid them.</p>
      <h3 id="can-dogs-eat-fish-and-chips">Can dogs eat fish and chips?</h3>
      <p>No, not in the way humans eat them. It’s ok to give them a small piece of the fish without batter, and one or two plain chips (without salt), as mentioned above. However, the usual portion of human fish and chips is high in fat, carbohydrates and salt, so shouldn’t be in your dog’s food bowl.</p>
      <p>If you want your dog to be involved in your fish supper, you could serve up a dog-friendly version of the meal with white fish, potato, and peas. This is a highly nutritious meal for a dog that’s much easier on their digestion than our fatty treat versions.</p>
      <h3 id="can-dogs-eat-chips-without-salt">Can dogs eat chips without salt?</h3>
      <p>One or two. If you don’t have salt on your chips, one or two plain chips from your plate isn’t going to do too much harm. However, it also doesn’t give much benefit to a dog, so don’t do this often to avoid weight gain in your pooch.</p>
      <h3 id="can-dogs-eat-frozen-chips">Can dogs eat frozen chips?</h3>
      <p>If you’re wondering ‘can my dog eat oven chips?’, as in the kind you put in the freezer, the answer is also ‘not really’. Frozen oven chips don’t provide any nutritional value - so though it won’t do much harm to give them a plain, cooked oven chip, it’s best to choose a different kind of potato that’s much kinder to their delicate doggy tums.</p>
      <p>It might seem obvious, but never give a dog a frozen chip. Finally, if the oven chips are a variety covered in spices or seasonings, definitely avoid those, too.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>Overall, chips aren’t a recommended snack for our beloved pooches - they’re simply too high in fat, usually have a high salt content, and contain barely any nutritional value. That said, one or two plain chips are unlikely to cause them much harm - just don’t do this often to avoid weight gain and bad snacking habits in your dog.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you want to feed your pooch a chip-like snack that’s much higher in nutritional benefits, you could try the following…</p>
      <p>Carrot makes for a nutritious veggie for dogs. Given peeled and raw, they’re also great for chewing to calm your dog, and help clean their teeth.</p>
      <p>Sweet potato has the same fluffy texture as potato but with lots of vitamins and fibre.</p>
      <p>Pumpkin is a more nutrient-dense veggie that has a similar texture to potato.</p>
      <p>For other dog food and treats for dogs that are delicious and full of nutritional benefits, check out our grain-free range of wet and dry food, dog treats and supplements intended to keep your dog happy and healthy.</p>
`,
  headings: [
    { id: 'are-chips-good-for-dogs', text: 'Are chips good for dogs?', level: 2 },
    { id: 'when-are-chips-unsafe-for-dogs', text: 'When are chips unsafe for dogs?', level: 2 },
    { id: 'can-puppies-eat-chips', text: 'Can puppies eat chips?', level: 2 },
    { id: 'can-dogs-be-allergic-to-chips', text: 'Can dogs be allergic to chips?', level: 3 },
    { id: 'can-chips-make-dogs-sick', text: 'Can chips make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-chips-to-your-dog', text: 'How to safely give chips to your dog?', level: 2 },
    { id: 'what-kinds-of-chips-can-dogs-eat', text: 'What kinds of chips can dogs eat?', level: 3 },
    { id: 'can-dogs-eat-banana-chips', text: 'Can dogs eat banana chips?', level: 3 },
    { id: 'can-dogs-eat-crisps', text: 'Can dogs eat crisps?', level: 3 },
    { id: 'can-dogs-eat-tortilla-chips', text: 'Can dogs eat tortilla chips?', level: 3 },
    { id: 'can-dogs-eat-fish-and-chips', text: 'Can dogs eat fish and chips?', level: 3 },
    { id: 'can-dogs-eat-chips-without-salt', text: 'Can dogs eat chips without salt?', level: 3 },
    { id: 'can-dogs-eat-frozen-chips', text: 'Can dogs eat frozen chips?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},
'can-dogs-eat-black-pudding': {
  title: 'Can Dogs eat Black Pudding?',
  category: 'Pets',
  snippet: "No - black pudding isn’t a recommended food for dogs. With the potential for garlic, onion, lots of seasonings and a high level of fat, black pudding is simply too risky even as a treat",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_BLACK_PUDDING_500x_crop_center.jpg?v=1713537955",
    alt: "Can Dogs eat Black Pudding?",
    caption: "Are dogs allowed black pudding as a treat?"
  },
  content: `
<div>No - black pudding isn’t a recommended food for dogs. With the potential for garlic, onion, lots of seasonings and a high level of fat, black pudding is simply too risky even as a treat</div>
      <p>The truth is, black pudding is an indulgence for us humans, so it could wreak havoc with a dog’s sensitive digestive system and possibly make them ill. Read on for the full lowdown on why black pudding isn’t good for dogs</p>
      <h2 id="are-dogs-allowed-black-pudding-as-a-treat">Are dogs allowed black pudding as a treat?</h2>
      <p>No - it isn’t really considered a safe treat for dogs as it has high levels of fat and sodium, not to mention any extra ingredients that are often included in the process of making. If a pooch eats a small piece when you’re not looking, it could have no effect on them - but just make sure they don’t eat it again.</p>
      <h2 id="why-is-black-pudding-bad-for-dogs">Why is black pudding bad for dogs?</h2>
      <p>Black pudding is considered a treat for humans, an indulgence we usually reserve for the full ‘fry up’ breakfast plate. Dogs have sensitive tummies in comparison, so aren’t able to digest such a rich food.</p>
      <ul>
        <li>Its high fat content is bad for a dog’s internal organs, leading to weight gain, sickness or triggering health conditions such as pancreatitis or diabetes.</li>
        <li>High salt. Ingesting too much salt can be harmful to dogs, causing dehydration, sickness and diarrhoea or worse.</li>
        <li>Risky extra ingredients. Black pudding might contain garlic or onions, which is likely to trigger a reaction in your dog’s sensitive tum.</li>
      </ul>
      <h2 id="what-to-do-if-your-dog-eats-black-pudding">What to do if your dog eats black pudding?</h2>
      <p>If your dog snaffles a small piece of black pudding from your plate, it should hopefully not cause them much harm. They may suffer from a tummy upset, potentially diarrhoea or toilet trouble later. Keep an eye on them for any more severe reactions - if they seem very sick, or out of sorts, get in touch with a vet.</p>
      <h3 id="how-much-black-pudding-is-safe-for-dogs">How much black pudding is safe for dogs?</h3>
      <p>Black pudding isn’t safe for dogs to eat. Don’t let them have any black pudding, even for a treat, as it offers no nutritional benefit to your dog and could make them very ill. If they’ve sneaked a piece though, they’ll probably be okay - just keep an eye on them.</p>
      <h3 id="when-to-visit-the-vet">When to visit the vet</h3>
      <p>As said above, if your pooch somehow gets their snout into black pudding and exhibits signs of sickness or an unusual change in behaviour, call your vet right away. If they’ve eaten a large amount of black pudding, it could be worth getting to your vet for advice, even if they haven’t yet shown signs of sickness.</p>
      <h2 id="how-to-stop-your-dog-eating-black-pudding">How to stop your dog eating black pudding?</h2>
      <p>To stop your dog eating black pudding, don’t ever let them try it. If they’ve never tried it, they won’t associate the sight and smell of it with anything tasty. If you’re eating a meal with black pudding, keep it well out of sight and reach of your pooch, and store it safely when it isn’t being cooked or served.</p>
      <h2 id="other-types-of-black-pudding">Other types of black pudding</h2>
      <p>Here are a few examples of the different kinds of black pudding your dog might be interested in munching:</p>
      <h3 id="can-dogs-eat-black-pudding-raw">Can dogs eat black pudding raw?</h3>
      <p>Nope - raw black pudding isn’t healthier than cooked black pudding. In fact, it’s even more of a risk. Black pudding’s made of animal products which, when raw, are at a higher risk of carrying bacteria. Don’t feed your dog black pudding either cooked or raw.</p>
      <h3 id="can-dogs-eat-cooked-black-pudding">Can dogs eat cooked black pudding?</h3>
      <p>No - black pudding isn’t healthy for dogs due to its high level of salt, fat, and risky added ingredients such as onion. Keep cooked black pudding to your human plates, and keep out of reach of curious paws.</p>
      <h3 id="can-dogs-eat-white-pudding">Can dogs eat white pudding?</h3>
      <p>White pudding is made with grains, so isn’t deemed totally safe for dogs who have sensitive stomachs, as it’ll be hard for them to digest. Although it doesn’t contain blood, white pudding is similar to black pudding in that it’s high fat and high sodium. It’s best to avoid and stick to healthy dog treats.</p>
      <h2 id="what-other-foods-are-toxic-to-dogs">What other foods are toxic to dogs?</h2>
      <p>If you didn’t know about black pudding and are wondering what else might be toxic to dogs, the following foods should always be kept away from the dog’s bowl:</p>
      <ul>
        <li>Avocado. Though a superfood for humans, avocado contains a compound called persin which is toxic for dogs.</li>
        <li>Chocolate. Probably the most well-known no-no for dogs, chocolate is extremely toxic due to its theobromine content and should be avoided at all costs.</li>
        <li>Grapes and raisins. Avoid grapes and raisins, their sundried cousin. They contain tartaric acid which can be toxic to some dogs and can cause kidney issues, though some may eat them without issue.</li>
        <li>Tomatoes. Tomatoes contain a compound toxic to dogs called solanine, though this is present in much lower amounts in ripe tomatoes.</li>
        <li>Onions and garlic. Allium is the toxic substance found in onions and garlic - it impacts red blood cells in dogs which can lead to anaemia or even cause a dog to collapse.</li>
        <li>Xylitol/artificial sweetener. The artificial sweeteners found in a lot of human foods are poisonous to dogs - specifically Xylitol. Eating it can cause a sharp drop in blood sugar which can result in liver dysfunction in dogs.</li>
      </ul>
      <p>Try our healthy treats for dogs that they won’t be able to resist, packed full of nutritious ingredients intended to support their physical and mental health.</p>
`,
  headings: [
    { id: 'are-dogs-allowed-black-pudding-as-a-treat', text: 'Are dogs allowed black pudding as a treat?', level: 2 },
    { id: 'why-is-black-pudding-bad-for-dogs', text: 'Why is black pudding bad for dogs?', level: 2 },
    { id: 'what-to-do-if-your-dog-eats-black-pudding', text: 'What to do if your dog eats black pudding?', level: 2 },
    { id: 'how-much-black-pudding-is-safe-for-dogs', text: 'How much black pudding is safe for dogs?', level: 3 },
    { id: 'when-to-visit-the-vet', text: 'When to visit the vet', level: 3 },
    { id: 'how-to-stop-your-dog-eating-black-pudding', text: 'How to stop your dog eating black pudding?', level: 2 },
    { id: 'other-types-of-black-pudding', text: 'Other types of black pudding', level: 2 },
    { id: 'can-dogs-eat-black-pudding-raw', text: 'Can dogs eat black pudding raw?', level: 3 },
    { id: 'can-dogs-eat-cooked-black-pudding', text: 'Can dogs eat cooked black pudding?', level: 3 },
    { id: 'can-dogs-eat-white-pudding', text: 'Can dogs eat white pudding?', level: 3 },
    { id: 'what-other-foods-are-toxic-to-dogs', text: 'What other foods are toxic to dogs?', level: 2 },
  ]

},
'can-dogs-eat-cucumbers': {
  title: 'Can dogs eat Cucumbers?',
  category: 'Pets',
  snippet: "Yes, dogs can eat cucumbers! They are a fantastic, refreshing snack for dogs. Not only are they low calorie and great for hydration, they’re a rich source of vitamins and nutrients to keep your pooch’s body functioning and strong. Read on for all the answers on feeding cucumber to your dog.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_CUCUMBER_500x_crop_center.jpg?v=1708365313",
    alt: "Can dogs eat Cucumbers?",
    caption: "Is cucumber good for dogs?"
  },
  content: `
<h2 id="is-cucumber-good-for-dogs">Is cucumber good for dogs?</h2>
      <p>Yes, cucumber is very healthy for dogs. It’s made up of 90% water so is brilliant for hydration, and is low calorie and low fat. Basically, having your pooch chow down on a refreshing portion of cucumber will bring almost no risks, only benefits.</p>
      <h3 id="what-are-the-health-benefits">What are the health benefits?</h3>
      <p>Let’s get into the health benefits of cucumbers for dogs.</p>
      <ul>
        <li>90% water - We’ve said it and we’ll say it again - as cucumbers are mostly water, that transfers into your dog’s digestive system and helps hydrate them throughout the day.</li>
        <li>Low calorie, low sodium, fat-free  - Cucumbers are super low fat, so a great choice if you’re managing your pooch’s weight or cholesterol. In fact, one half-cup of cucumber is only 8 calories, compared to 40 in a standard dog biscuit.</li>
        <li>Soluble fibre - Cucumber flesh is packed with soluble fibre which easily absorbs into a dog’s body, keeps the gut microbiome healthy and boosts their digestive processes.</li>
        <li>Vitamin K - Helps to clot blood and heal bones. Dogs don’t produce this nifty vitamin on its own, so must get it from food, such as cucumbers. There’s also some vitamins A, C and B5 found in cucumber.</li>
        <li>Potassium - Fuels the ‘electrical charge’ to a dog’s nerves and muscles, helping them walk, jump and run.</li>
        <li>Manganese - Helps build and maintain a dog’s bones and cartilage in joints. It also helps absorb proteins and carbs, and stimulate enzyme function to boost their overall energy.</li>
        <li>Copper - Contributes to a pooch’s healthy skin, fur and connective tissue, as well as absorbing iron and regenerating red blood cells.</li>
        <li>Phytonutrients and phytochemicals - Neutralise free radicals, boost antioxidants and even freshen your dog’s breath.</li>
      </ul>
      <h2 id="when-is-cucumber-unsafe-for-dogs">When is cucumber unsafe for dogs?</h2>
      <p>As with anything you feed your dog, don’t overdo it. Though they’re one of the more harmless healthy snacks for dogs, cucumbers are full of water and too much of it can cause a stomach upset in your pooch.</p>
      <p>Also, serve cucumbers plain. Some cucumber in Chinese dishes comes cooked and slathered in sugar or soy sauce. Avoid this form of cucumber; fresh is always best.</p>
      <h2 id="can-puppies-eat-cucumbers">Can puppies eat cucumbers?</h2>
      <p>Sure - cucumber is a healthy, crunchy snack for a growing pooch. Just be sure to remove skin and seeds (these may be too much for puppy teeth), and serve plain, chopped into small pieces for puppy mouths.</p>
      <h3 id="can-dogs-be-allergic-to-cucumbers">Can dogs be allergic to cucumbers?</h3>
      <p>It’s unlikely, but dogs can develop allergies to cucumbers. Give your pooch a small piece if they’ve not eaten it before, and watch for any adverse reactions, such as the following:</p>
      <ul>
        <li>Bouts of diarrhoea or vomiting</li>
        <li>Skin reactions such as reddening, itchiness or a rash</li>
        <li>Swelling</li>
        <li>Stomach pain or bloatedness</li>
        <li>Ear infections</li>
        <li>Breathing issues (wheezing, etc.)</li>
      </ul>
      <h3 id="can-cucumbers-make-dogs-sick">Can cucumbers make dogs sick?</h3>
      <p>As above, cucumbers can make dogs sick if they’ve developed an allergy to it. Of course, if the cucumber is past its freshest, then it might cause a stomach upset, so make sure you always feed fruit and vegetables that are ripe and crisp. Cucumber should also be eaten as a snack or treat, and fed in moderation - not used as a meal replacement - to avoid making your dog unwell.</p>
      <h2 id="how-to-safely-give-cucumbers-to-your-dog">How to safely give cucumbers to your dog?</h2>
      <p>So long as the cucumber is ripe, it will be safe to give to your hungry pooch. You can give your dog a half cucumber so they can chew on it like a carrot or dog chew toy, or chop into bite-sized pieces. Leaving the skin on is not only safe, but recommended  - the skin is where all the nutrients are!</p>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>The amount of cucumber you feed your dog will depend on their breed, size and health condition, but you should treat cucumber as if it were a snack or treat. Snacks and treats should ideally take up about 10% of your dog’s regular diet.</p>
      <h2 id="what-types-of-cucumbers-can-dogs-eat">What types of cucumbers can dogs eat?</h2>
      <p>Cucumbers are pretty standard in the way they’re served - raw and fresh is always best! Here are some breakdowns as to the different parts of cucumber you can feed your dog:</p>
      <h3 id="can-dogs-eat-cucumber-raw">Can dogs eat cucumber raw?</h3>
      <p>Yes, it’s preferable! A raw cucumber retains all its nutrients and goodness, such as potassium, vitamin K and soluble fibre, and is the healthiest and safest way to feed cucumber to your dog.</p>
      <h3 id="can-dogs-eat-cucumber-skin">Can dogs eat cucumber skin?</h3>
      <p>Dogs can and should eat the cucumber skin, if their teeth allow it! The skin is where a cucumber’s nutrients are densest, and where most of the fibre is. Just be sure it’s cleaned thoroughly, so there is no dirt or pesticides on the skin.</p>
      <h3 id="can-dogs-eat-cucumber-seeds">Can dogs eat cucumber seeds?</h3>
      <p>It depends. A lot of dogs can eat the whole cucumber - skin, seeds, the lot! If your dog has digestive issues however, or if they’re a puppy, it’s best to remove the seeds as they can be tricky to digest unless your pooch is in full health.</p>
      <h3 id="can-dogs-eat-pickles">Can dogs eat pickles?</h3>
      <p>A pickled cucumber won’t harm a dog as an occasional snack, especially if it’s plain. Don’t give your pooch any pickles that are marinated in garlic, chilli or other sauces or seasonings; these are all ingredients that are very toxic to dogs.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>Cucumbers are a hydrating, nutritious snack for dogs - especially as a summer treat! It’s fine to serve a cucumber with seeds and skin, as all of it is rich in vitamins and soluble fibre that help keep your dog healthy.</p>
      <p>Just feed in moderation as a snack, not a meal replacement, and be sure the cucumber is fresh and chopped into a manageable portion.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you’d love to feed your dog crunchy cucumber but are wondering about alternatives, why not consider the following?</p>
      <ul>
        <li>Watermelon, another hydrating fruit treat rich in Vitamin C</li>
        <li>Banana, a healthy snack full of fibre and potassium</li>
        <li>Pumpkin, or pumpkin treats for dogs</li>
        <li>Long-lasting fish chews for another satisfying, crunchy treat</li>
      </ul>
      <p>If you’re looking for healthy dog snacks or easy ways to diversify your dog’s diet, check out our range of healthy grain-free treats for dogs.</p>
`,
  headings: [
    { id: 'is-cucumber-good-for-dogs', text: 'Is cucumber good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits', text: 'What are the health benefits?', level: 3 },
    { id: 'when-is-cucumber-unsafe-for-dogs', text: 'When is cucumber unsafe for dogs?', level: 2 },
    { id: 'can-puppies-eat-cucumbers', text: 'Can puppies eat cucumbers?', level: 2 },
    { id: 'can-dogs-be-allergic-to-cucumbers', text: 'Can dogs be allergic to cucumbers?', level: 3 },
    { id: 'can-cucumbers-make-dogs-sick', text: 'Can cucumbers make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-cucumbers-to-your-dog', text: 'How to safely give cucumbers to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'what-types-of-cucumbers-can-dogs-eat', text: 'What types of cucumbers can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-cucumber-raw', text: 'Can dogs eat cucumber raw?', level: 3 },
    { id: 'can-dogs-eat-cucumber-skin', text: 'Can dogs eat cucumber skin?', level: 3 },
    { id: 'can-dogs-eat-cucumber-seeds', text: 'Can dogs eat cucumber seeds?', level: 3 },
    { id: 'can-dogs-eat-pickles', text: 'Can dogs eat pickles?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},
'can-dogs-eat-peppers': {
  title: 'Can dogs eat Peppers?',
  category: 'Pets',
  snippet: "Yes - dogs can absolutely eat peppers. All colours of peppers offer a healthy choice of snack for a peckish pooch, however red peppers are the most nutritious. Let’s answer some more of your questions over whether dogs can eat peppers..",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_PEPPERS_500x_crop_center.jpg?v=1708434447",
    alt: "Can dogs eat Peppers?",
    caption: "Are peppers good for dogs?"
  },
  content: `
<h2 id="are-peppers-good-for-dogs">Are peppers good for dogs?</h2>
      <p>Yes! Peppers are technically a fruit (though we tend to use them in savoury dishes), and they provide a healthy dose of vitamins and minerals for a dog, as well as being low calorie and low fat.</p>
      <h3 id="what-are-the-health-benefits">What are the health benefits?</h3>
      <p>Crunchy bell peppers have a host of health benefits for dogs. Here’s what makes them a sensible doggy snack option:</p>
      <p>Full of Vitamins A, C and E This power trio of vitamins in peppers contributes to your dog’s eyesight, collagen production, skin condition and immunity.</p>
      <p>Crunchy A food your dog can munch on, like peppers, will help strengthen and clean their teeth.</p>
      <p>Low calorie and low fat In moderation, peppers can be given as a healthy treat as part of their diet, to manage your dog’s weight.</p>
      <p>Antioxidants, anti-inflammatory Helps fight inflammation in your pooch’s body, as well as oxidative stress.</p>
      <p>Red peppers are nutrient rich The healthiest are red peppers - they’re crammed full of higher levels of nutrients than other colours and have nine times the levels of beta carotene than yellow and green peppers, which helps beneficial vitamin A do its best work.</p>
      <h2 id="when-are-peppers-unsafe-for-dogs">When are peppers unsafe for dogs?</h2>
      <p>All colours of peppers are safe for dogs, but avoid chilli peppers, such as jalapenos - they’re simply too spicy! Dogs aren’t keen on spicy foods and it could cause them tummy problems.</p>
      <p>Peppers are a treat for dogs, therefore shouldn’t be used as a meal replacement, but fed in moderation to complement meals. They should be chopped into pieces they won’t choke on - so don’t give a pooch pepper crudites, but cut them into halves or more chunky pieces.</p>
      <p>You should only feed your pooch the flesh of the pepper, never the green stem or seeds, and make sure the pepper is fresh and ripe, and served plain.</p>
      <h3 id="can-dogs-be-allergic-to-peppers">Can dogs be allergic to peppers?</h3>
      <p>Dogs can be allergic to any food, so if your pup hasn’t eaten them before, feed them a small piece of pepper and keep an eye on their reaction. If your dog starts showing any of the following signs, you probably shouldn’t include bell pepper in their usual snack rotation:</p>
      <ul>
        <li>Reddening skin, itching or a rash</li>
      </ul>
      <ul>
        <li>Swelling</li>
      </ul>
      <ul>
        <li>Breathing issues (wheezing, etc.)</li>
      </ul>
      <ul>
        <li>Severe or extended sickness or diarrhoea</li>
      </ul>
      <ul>
        <li>General change in behaviour (low energy, lethargic, etc.)</li>
      </ul>
      <h3 id="can-peppers-make-dogs-sick">Can peppers make dogs sick?</h3>
      <p>If your pooch is allergic, they may become sick from eating bell peppers (be sure to stop feeding them peppers completely). Dogs can also get sick from peppers if they eat too large a portion, if the peppers were spoiled or past their freshest, or if they were a spicy type of pepper, such as jalapeno or chillies.</p>
      <p>If they are served safely, however, peppers are a tasty, healthy food for dogs to snack on.</p>
      <h2 id="how-to-safely-give-peppers-to-your-dog">How to safely give peppers to your dog?</h2>
      <p>Peppers are a great, nutritious snack for pooches so long as they’re served safely. Be sure they’re-</p>
      <ul>
        <li>Fresh and ripe! They should be brightly coloured and firm with no softness or wrinkling of the skin.</li>
        <li>Rinsed under the tap to remove any potential pesticides.</li>
        <li>Remove the stem and seeds and chop into bite-sized pieces.</li>
        <li>Serve on its own as a snack, or sprinkle on top of grain-free dog food.</li>
        <li>Avoid hot or spicy chilli strains.</li>
        <li>If you’re serving peppers cooked, they should be served plain, with no added salt, seasoning or sauces.</li>
      </ul>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>A pepper is a snack or treat for your pooch, not a replacement for their regular dog food. The correct portion size will depend on your dog’s breed, size or health condition, but treats should count for 10% of their overall diet, so be sure to stick to that measurement as a guideline.</p>
      <h2 id="can-puppies-eat-peppers">Can puppies eat peppers?</h2>
      <p>Puppies can eat peppers as they’re healthy and great for teeth. Just cut fresh, ripe and clean peppers into tiny pieces that a puppy can chew easily. Introduce pepper in a small amount first, so you can assess whether it suits your puppy and they can digest it easily.</p>
      <h2 id="what-types-of-peppers-can-dogs-eat">What types of peppers can dogs eat?</h2>
      <p>In short, your dog can eat peppers as part of a healthy, balanced diet - but what kind of peppers can they eat, and how safe are they when served in different ways?</p>
      <h3 id="can-dogs-eat-raw-peppers">Can dogs eat raw peppers?</h3>
      <p>Yes! Raw peppers are the most nutrient-rich. Be sure the pepper is fresh and ripe, rinse it under the tap, chop into bite-sized pieces and serve. Raw red peppers contain the most goodness, lots of vitamin A, C and E and a powerful boost of antioxidants.</p>
      <h3 id="can-dogs-eat-cooked-peppers">Can dogs eat cooked peppers?</h3>
      <p>Cooked peppers are fine for a dog, so long as they’re plain and served without any added salt, seasoning or sauces. A dog will likely prefer to eat them raw, as they’re crunchier and more satisfying. Raw pepper also contains more nutrients and vitamins than when they’re cooked. And it saves you the cooking time!</p>
      <h3 id="can-dogs-eat-red-pepper">Can dogs eat red pepper?</h3>
      <p>Absolutely - in fact they’re the healthiest kind of pepper there is. Raw red pepper contains lots of vitamins A, C and E as well as having anti-inflammatory properties.</p>
      <h3 id="can-dogs-eat-green-peppers">Can dogs eat green peppers?</h3>
      <p>Yes. Green peppers are the most bitter-tasting of all the three bell peppers, however they’re still perfectly healthy for a dog to eat as a snack. The red coloured pepper is the most nutrient-rich.</p>
      <h3 id="can-dogs-eat-yellow-peppers">Can dogs eat yellow peppers?</h3>
      <p>Yep - yellow peppers are a perfectly nutritious snack for a dog. Red peppers have the most nutrients, but yellow and green peppers are still healthy when served raw, plain and chopped into bite-sized pieces.</p>
      <h3 id="can-dogs-eat-chilli-peppers">Can dogs eat chilli peppers?</h3>
      <p>No. Do not feed dogs chilli peppers such as jalapenos or other spicy varieties. Dogs don’t like spice! They could cause your poor pooch to have an irritated mouth and tongue, as well as sickness or stomach upset later.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>In summary, bell peppers are a delicious, nutrient-rich treat for a dog.</p>
      <ul>
        <li>The red peppers have the highest concentration of vitamins such as A, C and E, however green and yellow peppers are also safe, healthy and tasty.</li>
        <li>Be sure the peppers are ripe, clean and served plain, chopped into pieces that won’t be a choking hazard.</li>
        <li>Avoid spicy varieties of peppers completely.</li>
      </ul>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you’re keen on feeding your dog peppers, but you’re looking for nutritious alternatives, why don’t you try the following?</p>
      <ul>
        <li>Fresh pumpkin or pumpkin-flavoured dog treats</li>
        <li>Hydrating chunks of cucumber</li>
        <li>Apple is full of fibre</li>
        <li>Dog food with sweet potato, another anti-inflammatory</li>
        <li>Salmon Oil for Dogs packs a punch of anti-inflammatories among tons of other health benefits.</li>
      </ul>
      <p>If you’re looking for healthy ways to give your dog a snack, check out Pooch & Mutt’s range of nutritious treats for dogs crammed with vitamins, minerals, proteins and supplements.</p>
`,
  headings: [
    { id: 'are-peppers-good-for-dogs', text: 'Are peppers good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits', text: 'What are the health benefits?', level: 3 },
    { id: 'when-are-peppers-unsafe-for-dogs', text: 'When are peppers unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-peppers', text: 'Can dogs be allergic to peppers?', level: 3 },
    { id: 'can-peppers-make-dogs-sick', text: 'Can peppers make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-peppers-to-your-dog', text: 'How to safely give peppers to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'can-puppies-eat-peppers', text: 'Can puppies eat peppers?', level: 2 },
    { id: 'what-types-of-peppers-can-dogs-eat', text: 'What types of peppers can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-raw-peppers', text: 'Can dogs eat raw peppers?', level: 3 },
    { id: 'can-dogs-eat-cooked-peppers', text: 'Can dogs eat cooked peppers?', level: 3 },
    { id: 'can-dogs-eat-red-pepper', text: 'Can dogs eat red pepper?', level: 3 },
    { id: 'can-dogs-eat-green-peppers', text: 'Can dogs eat green peppers?', level: 3 },
    { id: 'can-dogs-eat-yellow-peppers', text: 'Can dogs eat yellow peppers?', level: 3 },
    { id: 'can-dogs-eat-chilli-peppers', text: 'Can dogs eat chilli peppers?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},
'can-dogs-eat-marshmallows': {
  title: 'Can dogs eat Marshmallows?',
  category: 'Pets',
  snippet: "Short answer - no, your dog can’t eat marshmallows. Marshmallows are fluffy, sticky and super sweet - but as you may have guessed, they have no nutritional value for a dog, and some varieties could make them really unwell. Read on for all the answers on why marshmallows aren’t recommended for a dog’s diet…",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_MARSHMELLOWS_500x_crop_center.jpg?v=1708435307",
    alt: "Can dogs eat Marshmallows?",
    caption: "Are marshmallows bad for dogs?"
  },
  content: `
<h2 id="are-marshmallows-bad-for-dogs">Are marshmallows bad for dogs?</h2>
      <p>Marshmallows are a powdery sweet treat for humans, and they aren’t great for a dog’s health. They may feel light and airy, but with the main ingredients in a batch of marshmallows being sugar, gelatin, glucose syrup and water, they definitely contain no nutritional benefit. The high levels of sugar can cause stomach pains or gastrointestinal issues in dogs, or long-term can cause weight gain or illnesses like diabetes.</p>
      <h2 id="what-to-do-if-your-dog-eats-marshmallows">What to do if your dog eats marshmallows</h2>
      <p>If your dog has eaten a single marshmallow it’s unlikely to harm them - at worst, they might suffer from gas or a dodgy tummy. If they’ve eaten a lot of marshmallows, or gotten into a bag of them, this is more of a cause for concern. Keep a close eye on your pooch and if they show any signs of sickness, get in touch with a vet immediately.</p>
      <h3 id="how-much-is-safe-for-dogs">How much is safe for dogs?</h3>
      <p>As above, one plain marshmallow isn’t a cause for emergency - though it’s not recommended you feed marshmallows to your dog at all. With so much sugar and glucose and no nutritional value, they are only likely to cause your pooch an unnecessary stomach ache.</p>
      <h3 id="can-they-make-your-dog-sick">Can they make your dog sick?</h3>
      <p>Yes, eating a bunch of marshmallows is very likely to make your dog sick (one will probably be fine). A big risk, however, is if the marshmallows contain artificial sweeteners, such as Xylitol (common in sugar-free marshmallows, for example). This is highly toxic to dogs and can even prove lethal by causing a drop in sugar levels that can lead to liver failure.</p>
      <h3 id="when-to-visit-the-vet">When to visit the vet</h3>
      <p>If the marshmallows your dog has eaten contain Xylitol, get them to a vet straight away. If your pooch has eaten a few marshmallows and they appear to have a stomach ache, severe diarrhoea, are vomiting or otherwise displaying strange behaviour, definitely get some medical advice from a vet.</p>
      <h3 id="how-to-stop-your-dog-eating-marshmallows">How to stop your dog eating marshmallows?</h3>
      <p>The clearest way to stop your dog eating marshmallows is firstly, never give them to your dog in the first place. If they’ve never eaten a marshmallow, they won’t know what they’re missing!</p>
      <p>If you have a dog that eats anything they come across, just be sure to keep human treats such as marshmallows well out of reach of a dog, in a highly placed, secure cupboard. Training your dog not to beg for human sweets with commands such as “leave it” and “not for you” can also help.</p>
      <p>If you want to give your dog a treat, there are lots of alternative snacks that are healthy for them (read on for suggestions).</p>
      <h2 id="can-dogs-eat-other-types-of-marshmallows">Can dogs eat other types of marshmallows?</h2>
      <p>The overall answer is no, marshmallows are generally a no-go for a dog’s snack! Here are some more specifics surrounding various marshmallows:</p>
      <h3 id="can-dogs-eat-mini-marshmallows">Can dogs eat mini marshmallows?</h3>
      <p>Nope - it doesn’t matter the size, marshmallows aren’t recommended for dogs because they’re so high in sugar, with no nutritional value. Some dog owners use a mini marshmallow to hide a pill if their dog needs to take medication. If your dog struggles to swallow pills, try hiding it in a different treat, such as cheese. Marshmallows are also sticky and chewy, so can get stuck in a dog’s teeth.</p>
      <h3 id="can-dogs-eat-vegan-marshmallows">Can dogs eat vegan marshmallows?</h3>
      <p>Maybe. Dogs can eat vegan marshmallows so long as they don’t contain Xylitol. But even then, they’re still likely to contain high levels of sugar and glucose syrup and therefore won’t have much benefit to a dog, so an alternative snack (a piece of apple maybe) is probably best instead.</p>
      <h3 id="can-dogs-eat-roasted-marshmallows">Can dogs eat roasted marshmallows?</h3>
      <p>Definitely don’t give a roasted marshmallow to your dog. Marshmallows are high in sugar and empty of nutrients even when ‘raw’, but when roasted, they’re gooey and hot, and likely to get stuck in your pooch’s teeth. If they manage to snaffle a roasted marshmallow when you aren’t looking, it’s not a big deal - just be sure not to give them one intentionally.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>To summarise, you shouldn’t include marshmallows in your dog’s diet, even as an occasional treat. Marshmallows offer no nutritional value to a dog, and are high in sugar - though one is unlikely to do them any harm. ‘Sugar-free’ marshmallows could be an even worse option, as artificial sweeteners such as Xylitol can be lethal to a dog. Stick to more nutritious dog treats.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>Here are some alternative ways to offer your dog a tasty, nutritious treat:</p>
      <ul>
        <li>Beef jerky for dogs. If your dog likes snacks (don’t they all), this protein-rich jerky is satisfying and tasty.</li>
        <li>Peanut butter dog dental sticks, delicious chewy treats that are healthy and good for a dog’s teeth, too.</li>
        <li>Sweet fruit such as banana, apple or strawberries.</li>
      </ul>
      <p>If you’re looking for healthy treats for your dog packed with whole ingredients and nutrients to keep them happy, calm and care-free, check out our range of grain-free dog treats.</p>
      <section>References</section>
`,
  headings: [
    { id: 'are-marshmallows-bad-for-dogs', text: 'Are marshmallows bad for dogs?', level: 2 },
    { id: 'what-to-do-if-your-dog-eats-marshmallows', text: 'What to do if your dog eats marshmallows', level: 2 },
    { id: 'how-much-is-safe-for-dogs', text: 'How much is safe for dogs?', level: 3 },
    { id: 'can-they-make-your-dog-sick', text: 'Can they make your dog sick?', level: 3 },
    { id: 'when-to-visit-the-vet', text: 'When to visit the vet', level: 3 },
    { id: 'how-to-stop-your-dog-eating-marshmallows', text: 'How to stop your dog eating marshmallows?', level: 3 },
    { id: 'can-dogs-eat-other-types-of-marshmallows', text: 'Can dogs eat other types of marshmallows?', level: 2 },
    { id: 'can-dogs-eat-mini-marshmallows', text: 'Can dogs eat mini marshmallows?', level: 3 },
    { id: 'can-dogs-eat-vegan-marshmallows', text: 'Can dogs eat vegan marshmallows?', level: 3 },
    { id: 'can-dogs-eat-roasted-marshmallows', text: 'Can dogs eat roasted marshmallows?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},
'can-dogs-eat-mackerel': {
  title: 'Can dogs eat Mackerel?',
  category: 'Pets',
  snippet: "Yes - you’ll be glad to know that in moderation, dogs can eat mackerel. Mackerel is a delectable and nutritious food for dogs, great as a snack or as part of a balanced meal. There are recommended ways to serve mackerel to your pooch, however - so let’s go into some more detail about the oily fish.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_MACKEREL_500x_crop_center.jpg?v=1708435861",
    alt: "Can dogs eat Mackerel?",
    caption: "Is mackerel good for dogs?"
  },
  content: `
<h2 id="is-mackerel-good-for-dogs">Is mackerel good for dogs?</h2>
      <p>Absolutely - mackerel is one of the healthiest fish a dog can eat. It should be fed in moderation, as with any food, but when served as part of a balanced diet, it can provide dogs with a host of powerful benefits.</p>
      <h3 id="what-are-the-health-benefits-of-mackerel">What are the health benefits of mackerel?</h3>
      <p>Rich in Fatty Acids. As an oily fish, mackerel is packed with fatty acid omega-3 which is greatly beneficial to a dog’s health. Fatty acids contribute to a dog’s healthy skin and coat, cardiovascular health, joint protection and reduced inflammation. They also boost immunity and brain function.</p>
      <p>High in Protein. Fish is a great protein source for pooches, which is essential for muscle development and strength.</p>
      <p>Vitamin D. Dogs don’t get much vitamin D from the sun, and instead get it from food such as mackerel. This vitamin balances minerals in the body and ensures healthy skin and bone growth.</p>
      <p>Vitamin B12 enables your dog to absorb iron, a lack of which can cause anaemia and low energy levels. It’s also an important brain nutrient.</p>
      <p>Super tasty. Dogs love the taste of fish, so it’s a great way of boosting their health while giving them a delicious treat.</p>
      <h2 id="can-puppies-eat-mackerel">Can puppies eat mackerel?</h2>
      <p>Yes - the nutrients in mackerel are particularly good for a puppy’s growth and development. It’s a good source of protein for building strength, and the essential fatty acids and vitamins are important for brain and bone growth. Be sure to feed in moderation to your pup, and serve cooked, without bones, cut into tiny puppy pieces.</p>
      <h2 id="is-mackerel-unsafe-for-dogs">Is mackerel unsafe for dogs?</h2>
      <p>Mackerel is only unsafe for dogs for the same reasons it might be unsafe for humans. It should be fresh and of good quality, with bones removed. It’s a good idea to feed only fresh fillets that are deboned and cooked, without any added marinades or sauces (read on for the best way to serve mackerel to your pooch!).</p>
      <p>There is a small chance your dog might have a mackerel allergy, in which case it might be unsafe for them to eat.</p>
      <h3 id="can-dogs-be-allergic-to-mackerel">Can dogs be allergic to mackerel?</h3>
      <p>Dogs can be allergic to anything, so it’s best to keep a close eye on them if you’re feeding it to your pooch for the first time. Feed a small amount to introduce it to them. If they show any of the following signs, don’t serve mackerel to them again, and perhaps test if they show the same symptoms to any other fish.</p>
      <ul>
        <li>Reddening skin, itching or a rash</li>
      </ul>
      <ul>
        <li>Swelling</li>
      </ul>
      <ul>
        <li>Breathing issues (wheezing, etc.)</li>
      </ul>
      <ul>
        <li>Severe or extended sickness or diarrhoea</li>
        <li>Bloating or pain</li>
      </ul>
      <ul>
        <li>General change in behaviour (low energy, lethargic, etc.)</li>
        <li>Ear infections</li>
      </ul>
      <h3 id="can-mackerel-make-dogs-sick">Can mackerel make dogs sick?</h3>
      <p>Mackerel can make dogs sick if it’s not fresh, if it comes in sauces and marinades, or if your pooch has an allergic reaction to it. Be sure to serve it safely to avoid your dog getting a tummy upset.</p>
      <h2 id="how-to-safely-give-mackerel-to-your-dog">How to safely give mackerel to your dog?</h2>
      <p>The best way to safely give mackerel to your dog is to make sure it’s fresh and cooked plain. Bear in mind the following advice to serve the perfect fishy mackerel portion:</p>
      <ul>
        <li>Choose fresh, sustainably-sourced fish.</li>
        <li>Ensure the fish is deboned or has soft bones (ask the shop assistant or fishmonger about this).</li>
        <li>Cook the fish fresh, or if you’ve frozen it, be sure it’s thoroughly defrosted.</li>
        <li>Don’t cover the fish in salt, pepper, sauces or seasonings. Plain fish, either pan-fried, oven-cooked or steamed is the safest way to cook mackerel for a pooch.</li>
        <li>Serve mackerel as part of a balanced meal or as an occasional treat.</li>
      </ul>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>If you’re feeding a pooch mackerel, be sure it’s in moderation. Too much mackerel has a high fat content (even though it’s healthy fat), so it needs to be balanced with other veggies, proteins and botanicals as part of a well-rounded doggy diet.</p>
      <p>Portion sizes will depend on your dog’s breed, size and health condition. Ask your vet if you’re not entirely sure.</p>
      <h4>Can dogs eat mackerel everyday?</h4>
      <p>Though a dog could eat mackerel every day, it’s a good idea to mix up the types of proteins your dog eats to ensure they get a full range of nutrients. You could feed your dog other fish such as salmon or cod, or other lean proteins such as turkey or chicken.</p>
      <h2 id="what-types-of-mackerel-can-dogs-eat">What types of mackerel can dogs eat?</h2>
      <p>We know that your pooch is safe to eat a well-prepared portion of mackerel! Next, let’s get into the different types of mackerel they can either tuck into safely, or should avoid:</p>
      <h3 id="can-dogs-eat-raw-mackerel-fillets">Can dogs eat raw mackerel fillets?</h3>
      <p>It’s not a great idea to feed your dog raw fish of any kind - it’s much safer to ensure the fish is cooked. This is because raw fish carries the risks of harmful bacteria like salmonella, or parasites such as flukes and roundworms that can cause serious illness to you or your dog.</p>
      <p>If you have some raw mackerel fillets, either steam, pan-fry or roast off the fillets and serve them to your pooch plain.</p>
      <h3 id="can-dogs-eat-smoked-mackerel">Can dogs eat smoked mackerel?</h3>
      <p>No - unfortunately not. Smoked or cured mackerel has too high a salt content. These vacuum packed mackerel fillets often come with lots of added flavourings such as pepper, lemon and chilli marinades, which should also be avoided. Stick to fresh mackerel that has been cooked plain.</p>
      <h3 id="can-dogs-eat-tinned-canned-mackerel">Can dogs eat tinned/canned mackerel?</h3>
      <p>This depends on what the mackerel comes in. Generally, fresh mackerel is always better than canned due to potential preservatives that could be present. When mackerel is canned or tinned, a lot of its powerful nutrients diminish.</p>
      <p>Dogs should not eat the following canned mackerel due to harmful salt content, additives or flavourings:</p>
      <b>Mackerel in tomato sauce</b>
      <b>Mackerel in brine</b>
      <b>Mackerel in sunflower oil</b>
      <p>Dogs can eat mackerel in olive oil; that’s likely to have the most nutrients - however it should be deemed a treat and fed in moderation. The olive oil adds extra fat to the mackerel that could lead to obesity in your pooch.</p>
      <h3 id="can-dogs-eat-mackerel-skin">Can dogs eat mackerel skin?</h3>
      <p>Yes - mackerel skin is delicious to dogs and very nutrient-dense. Skins can be fatty though, so make sure they’re fed in moderation, like the rest of the mackerel. Remember, the skin should also be cooked and served plain with no added seasoning.</p>
      <h3 id="can-dogs-eat-whole-mackerel-including-heads">Can dogs eat whole mackerel including heads?</h3>
      <p>Dogs can eat the head of a fish but only if it’s soft and fresh. The fish has a lot of nutrients in it, like the rest of a mackerel - but if it’s too hard or has bones in it, definitely leave it out of their bowl. Only feed a whole mackerel to a dog if it has been deboned or you know that the bones are soft. The safest serving choice is to feed a deboned and cooked mackerel fillet to your pooch.</p>
      <h3 id="can-dogs-eat-mackerel-bones">Can dogs eat mackerel bones?</h3>
      <p>It’s recommended you only feed dogs mackerel without the bones, however, some mackerel have very soft bones and shouldn’t do too much harm. Check with your fishmonger if the mackerel has been deboned or has soft bones when you’re buying the fish.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>Overall, mackerel is a delicious, nutrient-dense food for your dog to eat either as a snack or part of a well-balanced meal. It’s packed full of omega-3 fatty acids as well as protein and vitamins.</p>
      <p>However, be sure it’s served cooked, ideally without bones. Serve plain, without any added salt, sauces or seasonings, and feed in moderation, as it can be very high in fat (even if it’s healthy fat!).</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you’re keen on feeding mackerel to your dog but want to look for alternatives, why not try the following?</p>
      <ul>
        <li>Salmon, another oily fish rich in protein and fatty acids</li>
        <li>Cod, long-lasting chews with cod, or dog food with cod - another nutritious fish, gentle on digestion</li>
        <li>Salmon Oil for dogs - containing all the goodness of oily fish, which you can drizzle over their regular food.</li>
        <li>Dog food with salmon - we have two tasty options including Health & Digestion and Joint Care</li>
        <li>Herring, or dog food with herring -  a novel protein source that helps support sensitive digestion.</li>
      </ul>
      <p>Take a look at Pooch & Mutt’s full range of healthy food for dogs - lots of our recipes contain nutrient-rich oily fish as a lean protein, alongside vegetables, carbohydrates and other powerful supplements.</p>
`,
  headings: [
    { id: 'is-mackerel-good-for-dogs', text: 'Is mackerel good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits-of-mackerel', text: 'What are the health benefits of mackerel?', level: 3 },
    { id: 'can-puppies-eat-mackerel', text: 'Can puppies eat mackerel?', level: 2 },
    { id: 'is-mackerel-unsafe-for-dogs', text: 'Is mackerel unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-mackerel', text: 'Can dogs be allergic to mackerel?', level: 3 },
    { id: 'can-mackerel-make-dogs-sick', text: 'Can mackerel make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-mackerel-to-your-dog', text: 'How to safely give mackerel to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'what-types-of-mackerel-can-dogs-eat', text: 'What types of mackerel can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-raw-mackerel-fillets', text: 'Can dogs eat raw mackerel fillets?', level: 3 },
    { id: 'can-dogs-eat-smoked-mackerel', text: 'Can dogs eat smoked mackerel?', level: 3 },
    { id: 'can-dogs-eat-tinned-canned-mackerel', text: 'Can dogs eat tinned/canned mackerel?', level: 3 },
    { id: 'can-dogs-eat-mackerel-skin', text: 'Can dogs eat mackerel skin?', level: 3 },
    { id: 'can-dogs-eat-whole-mackerel-including-heads', text: 'Can dogs eat whole mackerel including heads?', level: 3 },
    { id: 'can-dogs-eat-mackerel-bones', text: 'Can dogs eat mackerel bones?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},
'can-dogs-eat-porridge': {
  title: 'Can dogs eat Porridge?',
  category: 'Pets',
  snippet: "Yes, dogs can eat porridge! They can be a great addition to a dog’s healthy, well-balanced diet. But how should you serve porridge to your hungry pooch? We’ve answered all your answers around pooches who are peckish for porridge oats…",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_PORRIDGE_500x_crop_center.jpg?v=1708444150",
    alt: "Can dogs eat Porridge?",
    caption: "Is porridge good for dogs?"
  },
  content: `
<h2 id="is-porridge-good-for-dogs">Is porridge good for dogs?</h2>
      <p>Yep, porridge oats can be a great source of fibre, vitamins and minerals for dogs. Oats can be used as a weight loss aid, and they’re also brimming with antioxidants.</p>
      <h3 id="what-are-the-health-benefits-of-oats">What are the health benefits of oats?</h3>
      <p>Let’s get into more detail over the numerous health benefits of oats…</p>
      <b>Rich in dietary fibre which helps dogs feel full, promotes digestion and results in healthier poops.</b>
      <b>Vitamins B1 and B5, important for metabolising energy, proper nerve function, and the synthesising of hormones.</b>
      <b>Minerals such as iron, phosphorus and zinc; essential for blood flow, bone health, boosted immune function and healthy skin and coat.</b>
      <b>Packed with antioxidants and beta-glucans to fight inflammation and boost immunity, providing protection against diseases.</b>
      <b>Low fat - porridge is a low fat food that helps a dog stay lean and feel full.</b>
      <h2 id="can-puppies-eat-porridge">Can puppies eat porridge?</h2>
      <p>Puppies can eat a small amount of oats, so long as they’re served without added sugar or flavourings, and cooked so they’re digestible. Mix up some plain oats with water and cook in a pan until soft. Also be sure it’s not too hot when served.</p>
      <h2 id="when-is-porridge-unsafe-for-dogs">When is porridge unsafe for dogs?</h2>
      <p>Porridge is generally safe for dogs when served plain and cooked in water, but avoid raw oats, as they aren’t tasty and can be difficult for your dog to digest. Don’t add lots of sugar or flavourings to the porridge, and serve in moderation, never as a replacement for regular dog food.</p>
      <h3 id="can-dogs-be-allergic-to-oats">Can dogs be allergic to oats?</h3>
      <p>Yes - dogs can be allergic to oats, but it’s particularly rare. A dog allergy to wheat, for instance, would be much more common. If you haven’t fed your pooch oats before, feed a small amount and watch out for the following symptoms:</p>
      <ul>
        <li>Extended or severe diarrhoea or vomiting</li>
        <li>Swelling, redness or itchiness of the skin</li>
        <li>Change in behaviour (lethargic, low mood etc.)</li>
        <li>Ear infections</li>
        <li>Breathing issues (wheezing, etc.)</li>
        <li>Bloating or pain in stomach</li>
      </ul>
      <p>If you spot any of the above symptoms, don’t feed oats to your dog in future and if necessary, get in touch with your vet.</p>
      <h3 id="can-porridge-make-dogs-sick">Can porridge make dogs sick?</h3>
      <p>Dogs can be sick from porridge if they eat too much of it, if it’s fed as a meal replacement rather than just an occasional snack, or if they’re allergic to it.</p>
      <p>It’s important to feed oats cooked to dogs, as they may have issues digesting raw oats. Sugary flavourings or syrups, especially containing Xylitol, should absolutely be avoided.</p>
      <h2 id="how-to-safely-give-oats-to-your-dog">How to safely give oats to your dog?</h2>
      <p>The best way to serve a portion of oats to your pooch is to gently cook a small amount in a pan with water, and serve plain without any added sugar or flavourings.  Avoid flavoured brands of oats, and choose organic oats if possible.</p>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>Porridge oats should be a snack or a ‘side’ of sorts to your dog’s regular food. Perhaps try pouring some on top of their usual dog food, or just giving them some plain in a small bowl.</p>
      <p>How much they eat will be dependent on their breed, size or health condition. In general, the rule is to dedicate 10% of a dog’s diet to snacks and treats, so use that guideline, and never replace regular meals (which should be made of mostly lean proteins) with oats.</p>
      <h2 id="what-types-of-oats-can-dogs-eat">What types of oats can dogs eat?</h2>
      <p>The general rule is that plain cooked oats are the best, but let’s go into a bit more detail over what kinds of oats are safe for dogs…</p>
      <h3 id="can-dogs-eat-oats-raw">Can dogs eat oats raw?</h3>
      <p>Raw oats aren’t recommended for a dog, as they’re harder to digest, and not that appetising for a pooch. They also contain phytic acid which can interact with certain minerals already in a dog’s body, making them harder to absorb. Cooked oats are the best way to serve them - either as plain porridge with water, or even baked into dog-friendly treats. They still contain all their nutritious benefits when cooked.</p>
      <h3 id="can-dogs-eat-porridge-made-with-milk">Can dogs eat porridge made with milk?</h3>
      <p>Overall, remember that porridge cooked with water is always the best option when it comes to your dog. Humans tend to love a bit of porridge with milk, but this isn’t recommended for a dog, who is more likely to have a lactose intolerance due to not consuming milk all that regularly.</p>
      <h3 id="can-dogs-eat-porridge-with-honey">Can dogs eat porridge with honey</h3>
      <p>Porridge oats cooked with honey isn’t necessarily unsafe for a dog - both ingredients are natural and nutritious. However, honey adds a lot of calories to porridge, and it’s not really needed to sweeten a dog’s food. If you do opt for honeyed porridge oats, serve it cooked with water as a special treat.</p>
      <h3 id="can-dogs-eat-porridge-with-water">Can dogs eat porridge with water?</h3>
      <p>Absolutely! Porridge cooked in a pan with water and served plain is the ideal way for a dog to eat porridge. This way it’s more appetising and easier for a pooch to digest, yet still contains all the goodness - such as B vitamins, minerals and dietary fibre - that makes it a healthy and nutritious snack.</p>
      <h3 id="can-dogs-eat-porridge-with-syrup">Can dogs eat porridge with syrup?</h3>
      <p>It’s not recommended you add syrup to your dog’s porridge portion. It’s very sweet, calorific and could contain lots of artificial additives and preservatives. Syrup-covered or sugary foods are likely to lead a dog to gain weight.</p>
      <p>Plain porridge is tasty enough for a dog, there’s no need to add a sweetener - and definitely avoid anything which may contain Xylitol, which is toxic to dogs.</p>
      <h3 id="can-dogs-eat-porridge-with-banana">Can dogs eat porridge with banana?</h3>
      <p>In moderation, yes. Both oats and bananas are a tasty, healthy option for pooches, but adding banana as a topping also piles on those extra calories. Maybe consider this as an extra special treat, and not something that’s regularly fed as a combination.</p>
      <h2 id="are-oats-or-rice-better-for-dogs">Are oats or rice better for dogs?</h2>
      <p>Both oats or rice can be included in a dogs’ diet, though which is safer depends on whether the dog has certain intolerances. Both oat and rice allergies are very uncommon, however we recommend rice for pooches with an upset stomach.</p>
      <p>Oats are probably slightly more nutrient dense than rice, though they should be used as a snack or addition to a dog’s regular food.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>The bottom line regarding oats and porridge for dogs - it’s a-ok! Just be sure to cook it gently in water and serve plain (not too hot!), without added sugar or flavourings. Use a plain brand of oats, not the pre-flavoured kinds.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you like the idea of feeding your pooch oats but are looking for alternative healthy snacks, why not try the following?</p>
      <ul>
        <li>Apple, another digestible source of fibre</li>
        <li>Pumpkin, for fibre and digestion</li>
        <li>Grain-free dog food for a sensitive stomach</li>
      </ul>
      <b>Browse the full range at Pooch & Mutt for more tasty,</b>
      <a>healthy treats for dogs</a>
      <b>as well as nutritious</b>
      <a>grain-free dog foods</a>
      <b>to keep your pooch strong, happy and care-free.</b>
`,
  headings: [
    { id: 'is-porridge-good-for-dogs', text: 'Is porridge good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits-of-oats', text: 'What are the health benefits of oats?', level: 3 },
    { id: 'can-puppies-eat-porridge', text: 'Can puppies eat porridge?', level: 2 },
    { id: 'when-is-porridge-unsafe-for-dogs', text: 'When is porridge unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-oats', text: 'Can dogs be allergic to oats?', level: 3 },
    { id: 'can-porridge-make-dogs-sick', text: 'Can porridge make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-oats-to-your-dog', text: 'How to safely give oats to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'what-types-of-oats-can-dogs-eat', text: 'What types of oats can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-oats-raw', text: 'Can dogs eat oats raw?', level: 3 },
    { id: 'can-dogs-eat-porridge-made-with-milk', text: 'Can dogs eat porridge made with milk?', level: 3 },
    { id: 'can-dogs-eat-porridge-with-honey', text: 'Can dogs eat porridge with honey', level: 3 },
    { id: 'can-dogs-eat-porridge-with-water', text: 'Can dogs eat porridge with water?', level: 3 },
    { id: 'can-dogs-eat-porridge-with-syrup', text: 'Can dogs eat porridge with syrup?', level: 3 },
    { id: 'can-dogs-eat-porridge-with-banana', text: 'Can dogs eat porridge with banana?', level: 3 },
    { id: 'are-oats-or-rice-better-for-dogs', text: 'Are oats or rice better for dogs?', level: 2 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},
'can-dogs-eat-beetroot': {
  title: 'Can dogs eat Beetroot?',
  category: 'Pets',
  snippet: "Yes - dogs can eat fresh beetroot, the root vegetable famous for its intensely purple colour! Not only is beetroot safe to feed a pooch, it’s actually very healthy, and crammed full of nutritional benefits to keep a dog’s body strong and well-functioning. Let’s answer all your burning questions about whether dogs can eat beetroot…",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_BEETROOT_500x_crop_center.jpg?v=1708458801",
    alt: "Can dogs eat Beetroot?",
    caption: "Is beetroot good for dogs?"
  },
  content: `
<h2 id="is-beetroot-good-for-dogs">Is beetroot good for dogs?</h2>
      <p>Beetroot is a very healthy food for your dog, when it’s prepared in the right way. A lot of us think of beetroot as the pickled kind you get in jars - but this should actually be avoided when it comes to dogs, as it could contain salt and additives that will mess with their sensitive digestive system. Fresh or raw beetroot, however, is packed full of goodness and is great for digestion.</p>
      <h3 id="what-are-the-health-benefits-of-beetroot">What are the health benefits of beetroot?</h3>
      <p>Here’s why feeding beetroot to your dog can boost their health:</p>
      <ul>
        <li>Loaded with Fibre to aid digestion and boost gut health.</li>
        <li>Packed with Minerals such as calcium, potassium and magnesium; vital for your dog’s bone strength, muscle function and electrolyte balance.</li>
        <li>The skin contains Betalain Pigments, which are full of antioxidants and anti-inflammatory properties. These do an important job in improving a dog’s skin and coat, reducing gut stress and supporting their immune system</li>
        <li>Great source of Vitamin C, also great for immunity and promotes a dog’s collagen production.</li>
      </ul>
      <h2 id="when-are-beets-unsafe-for-dogs">When are beets unsafe for dogs?</h2>
      <p>Fresh beetroot is the best kind to feed dogs, as the beetroot you get in jars are pickled in vinegar - and are generally considered unsafe. Definitely avoid any beetroot that comes soaked in sauces, oils or other seasonings, it won’t sit well with your dog’s tum and could cause irritation.</p>
      <p>Important: If your dog has a calcium deficiency or is prone to bladder or kidney stones, get in touch with your vet before feeding them beets, as they could be a riskier snack than for healthy dogs (read on for more on this.)</p>
      <p>As with any snack, beets should be fed in moderation to your pooch, and served plain and chopped into pieces - perhaps scattered over their food, or on its own. Don’t use beetroot alone as a replacement for their regular dog food.</p>
      <h3 id="can-dogs-be-allergic-to-beetroot">Can dogs be allergic to beetroot?</h3>
      <p>Dogs can be allergic to any food, beetroot included. If you’ve never fed it to your pooch before, start out with a small serving and keep an eye on them for the rest of the day. If they show any adverse reactions, listed below, you should assume they don’t respond well to beetroot.</p>
      <ul>
        <li>Reddening, itching or a rash on the skin</li>
        <li>Swelling</li>
        <li>Breathing issues (wheezing, etc.)</li>
        <li>Ear infections or irritation</li>
        <li>Severe or consistent vomiting and diarrhoea</li>
        <li>Stomach pain and bloating</li>
        <li>Change in behaviour (seeming down, less energetic than usual)</li>
      </ul>
      <h3 id="can-beetroot-make-dogs-sick">Can beetroot make dogs sick?</h3>
      <p>Yes, if you serve a dog too much beetroot they may become sick with it. This is because its high oxalate content is linked to developing crystals which create kidney stones. High oxalates can also create calcium deficiencies. Because of this, it’s extra important to only feed beets in moderation - and if your pooch already has an issue with kidney stones, chat to your vet before adding them to their diet.</p>
      <p>If beets aren’t fresh, or they’re served up with added seasonings, this could cause your pup harm. If your pooch is allergic to beetroot, they might also become sick. If you’re concerned about how your dog responds when you feed them beetroot, don’t give them any more and if symptoms persist, get in touch with a vet.</p>
      <h2 id="how-to-safely-give-beetroot-to-your-dog">How to safely give beetroot to your dog?</h2>
      <p>Fresh, raw beetroot looks like a deep purple-coloured root vegetable, shaped like an onion, often with leaves attached. This is the kind of beetroot to feed your dog, not the classic jarred or tinned kind, or any that is vacuum packed in vinegar or seasoning.</p>
      <p>Always wash the bulbs before preparing, as they may have dirt or pesticide residue still stuck to them and you want them to be as clean as possible.</p>
      <p>Cooking the beetroot is the best option as it will be softer for your peckish pooch to munch on. You could oven roast or boil the beetroot, then chop it and sprinkle onto their food. If you serve it raw, you should cut it into easily digestible pieces, or maybe grate it onto their regular food.</p>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>A tasty portion of beetroot is very healthy for a dog, but it should still be considered a snack or treat. The ideal serving size will depend on your dog’s breed, age and health condition, but in general, treats should take up around 10% of a dog’s diet. Use these guidelines when whipping up this purple snack for your pup.</p>
      <h2 id="can-puppies-eat-beets">Can puppies eat beets?</h2>
      <p>Yes, though raw beetroot will be tricky for their young tummies to digest. Cook some fresh beetroot, and cut it into tiny pieces for their puppy mouths to munch easily. It should go down a treat and as it’s full of vitamins and antioxidants, provide lots of lovely health benefits for a puppy’s growth and development.</p>
      <h2 id="what-types-of-beets-can-dogs-eat">What types of beets can dogs eat?</h2>
      <p>There are a good few types of beetroot your dog could get their teeth into, so let’s discuss which beets are safer for dogs to eat…</p>
      <h3 id="can-dogs-eat-cooked---boiled-beetroot">Can dogs eat cooked / boiled beetroot?</h3>
      <p>Absolutely - though raw beets are more nutrient dense, cooked beetroot is great as it’s easier for dogs to munch and digest. Serve up small pieces of boiled or oven roasted beetroot, plain with no added seasoning, and either sprinkle it over your dog’s food, or on its own as a snack. Be sure to wash the beets first to get rid of any pesticides… and buying organic beetroot is even better.</p>
      <h3 id="can-dogs-eat-pickled-beetroot-in-vinegar">Can dogs eat pickled beetroot in vinegar?</h3>
      <p>No - avoid canned or pickled beetroot for dogs. Though they seem to be whole and similar to fresh beets, they’re more likely to contain salt and other additives and preservatives, which are detrimental to a pooch’s sensitive digestive system. Fresh is best.</p>
      <h3 id="can-dogs-eat-raw-beetroot">Can dogs eat raw beetroot?</h3>
      <p>Fresh raw beetroot is the most nutritious way to serve beets to your dog - grated over their regular food, for instance, is a nifty way to get those beet nutrients into their diet.</p>
      <p>Cooked beets are easier for your dog to chew and digest, but as with all fruit and vegetables, raw beets retain their nutritional goodness which can sometimes deplete through cooking.</p>
      <h3 id="can-dogs-eat-beetroot-leaves">Can dogs eat beetroot leaves?</h3>
      <p>It depends. If your pooch has urinary issues or is prone to oxalate stone - they should be completely avoided! This is because the leaves contain the most oxalates, and can be dangerous to those pooches that are vulnerable. However, beet leaves are full of goodness for dogs without urinary problems. If you want to beat food wastage (no pun intended), use all parts of the beetroot including the greens. Rinse the whole beetroot thoroughly, cut off the greens and chop up into munchable pieces. Cook them off in a pan, similar to spinach - just avoid any butter, salt or seasoning. Hopefully your dog should devour them with the rest of the beets.</p>
      <h3 id="can-dogs-eat-beetroot-powder">Can dogs eat beetroot powder?</h3>
      <p>Maybe. Beetroot powder is a clever supplement that offers a condensed shot of the micronutrients you’d get from beetroot. In theory, adding beetroot powder to regular food should provide a boost to the immune system and aid digestion.</p>
      <p>However, it’s not recommended to offer a human supplement to dogs - it could contain ingredients that dogs don’t react well to. Unless the beetroot powder is made specifically for dogs, it’s a better idea to feed your pooch fresh beetroot.</p>
      <h3 id="can-dogs-eat-canned-beetroot">Can dogs eat canned beetroot?</h3>
      <p>No. Canned beets and beetroot that’s pickled in a jar aren’t recommended as part of a dog’s diet. These pickled beets tend to absorb lots of sodium, preservatives and extra hidden ingredients that aren’t good for a dog’s health, potentially causing gastrointestinal issues.</p>
      <h3 id="can-dogs-eat-beetroot-juice">Can dogs eat beetroot juice?</h3>
      <p>There’s not really any reason to give beetroot juice to your dog. Several beets are needed for one serving of beetroot juice, which is just an unnecessary quantity of beetroot that will probably go way over their recommended sugar and fibre levels. Stick to a fresh, whole beetroot so you can be sure of portion control.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>In summary, beetroots get a big thumbs up as a healthy snack for dogs - they’re packed full of fibre, vitamins and antioxidants. Whether they’re cooked or raw, fresh beetroot is the safest bet for your pooch; avoid pickled or tinned beetroot. Chop fresh beets into manageable pieces, and be sure to give them a good rinse before serving to get rid of any pesticides or dirt.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you like the idea of feeding your dog beetroots, there are some other great alternatives for healthy, nutrient-rich snacks and supplements too:</p>
      <ul>
        <li>Cucumber, another low calorie source of fibre</li>
        <li>Carrot, a crunchy snack packed with vitamins and minerals</li>
        <li>A digestive supplement for dogs such as Bionic Biotic</li>
        <li>Dog food with sweet potato, for digestion</li>
        <li>Adult Superfood or Puppy Superfood - both of which include beetroot and all sorts of other superfoods, to keep your pooch full of the healthy stuff</li>
      </ul>
      <p>Looking to supplement your dog’s diet with healthy, nutritious foods? Check out our range of natural, grain-free food for dogs, and healthy, grain-free dog treats. They’re packed full of whole ingredients to keep your pooch strong, happy and care-free.</p>
`,
  headings: [
    { id: 'is-beetroot-good-for-dogs', text: 'Is beetroot good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits-of-beetroot', text: 'What are the health benefits of beetroot?', level: 3 },
    { id: 'when-are-beets-unsafe-for-dogs', text: 'When are beets unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-beetroot', text: 'Can dogs be allergic to beetroot?', level: 3 },
    { id: 'can-beetroot-make-dogs-sick', text: 'Can beetroot make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-beetroot-to-your-dog', text: 'How to safely give beetroot to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'can-puppies-eat-beets', text: 'Can puppies eat beets?', level: 2 },
    { id: 'what-types-of-beets-can-dogs-eat', text: 'What types of beets can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-cooked---boiled-beetroot', text: 'Can dogs eat cooked / boiled beetroot?', level: 3 },
    { id: 'can-dogs-eat-pickled-beetroot-in-vinegar', text: 'Can dogs eat pickled beetroot in vinegar?', level: 3 },
    { id: 'can-dogs-eat-raw-beetroot', text: 'Can dogs eat raw beetroot?', level: 3 },
    { id: 'can-dogs-eat-beetroot-leaves', text: 'Can dogs eat beetroot leaves?', level: 3 },
    { id: 'can-dogs-eat-beetroot-powder', text: 'Can dogs eat beetroot powder?', level: 3 },
    { id: 'can-dogs-eat-canned-beetroot', text: 'Can dogs eat canned beetroot?', level: 3 },
    { id: 'can-dogs-eat-beetroot-juice', text: 'Can dogs eat beetroot juice?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},
'can-dogs-eat-tuna': {
  title: 'Can dogs eat tuna?',
  category: 'Pets',
  snippet: "Yes - dogs can eat tuna, but only in moderation. Tuna is a nutrient-rich fish, full of essential fatty acids and good amounts of protein, however, it can contain more harmful mercury than other fish, particularly when canned. In this article, we’ll answer all your questions about whether your dog can eat tuna.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_TUNA_500x_crop_center.jpg?v=1708459190",
    alt: "Can dogs eat tuna?",
    caption: "Is tuna good for dogs?"
  },
  content: `
<h2 id="is-tuna-good-for-dogs">Is tuna good for dogs?</h2>
      <p>In small amounts, tuna can be a healthy treat for a dog. As an oily fish, it contains lots of beneficial omega-3, among other nutrients - however, there are other nutritious fish that are safer for a dog to eat regularly.</p>
      <h3 id="what-are-the-health-benefits">What are the health benefits?</h3>
      <p>Let’s go into some of the health benefits of tuna:</p>
      <ul>
        <li>High in omega-3. Omega-3 fatty acids are essential for a dog’s body - they contribute to a healthy coat and skin, a boosted immune system, improved heart and brain health, and can reduce inflammation.</li>
        <li>Good source of protein. Protein is a vital nutrient for muscle development, repair and growth.</li>
        <li>Vitamins B12, selenium and niacin. Important for metabolising energy, boosting the immune system, and improving skin health and nerve function.</li>
      </ul>
      <h2 id="can-puppies-eat-tuna">Can puppies eat tuna?</h2>
      <p>Sometimes, depending on the type of tuna. It’s okay to feed puppies tuna in small amounts if you stick to Skipjack tuna, which has lower mercury levels. Albacore tuna tends to have higher mercury and should be avoided, as your puppy could be at risk from mercury poisoning. If you want to feed fish to a puppy, mackerel or salmon are generally safer options - and are still super tasty.</p>
      <h2 id="when-is-tuna-unsafe-for-dogs">When is tuna unsafe for dogs?</h2>
      <p>Tuna is unsafe for dogs in large amounts, and should only be deemed a treat to be fed occasionally. Of course, it’s also unsafe if it’s spoiled or out of date, or if your pooch has an allergy. Canned tuna is only safe for dogs when it comes in spring water - the kind soaked in brine or oils should be avoided.</p>
      <h3 id="can-dogs-be-allergic-to-tuna">Can dogs be allergic to tuna?</h3>
      <p>Dogs can have an allergy to tuna. Introduce a small amount of tuna to your dog, and if they have any of the following reactions, don’t feed it to your pooch again:</p>
      <ul>
        <li>Reddening skin, itching or a rash</li>
        <li>Swelling</li>
        <li>Breathing issues (wheezing, etc.)</li>
        <li>Severe or extended sickness or diarrhoea</li>
        <li>Bloating, stomach pain</li>
        <li>General change in behaviour (low energy, lethargic, etc.)</li>
        <li>Ear infections</li>
      </ul>
      <h3 id="can-tuna-make-dogs-sick">Can tuna make dogs sick?</h3>
      <p>Tuna has higher levels of mercury than other fish, so though it contains a lot of nutrients that benefit dogs, it’s not safe enough to have as a regular food in their diet. Mercury poisoning can make a dog very sick, leading to kidney damage or in severe cases, blindness - and it can even be lethal to puppies.</p>
      <p>If your pooch gets mercury poisoning, they may show the following symptoms:</p>
      <ul>
        <li>Vomiting or diarrhoea</li>
        <li>Loss of appetite</li>
        <li>Lethargy, unusually low energy</li>
        <li>Tremors</li>
        <li>Difficulty walking</li>
      </ul>
      <p>Spoiled tuna, or tuna that is soaked in brine or flavourings can also make a dog sick - they might also get sick as an allergic reaction to tuna. If your pooch shows any adverse reaction to tuna, it’s a good idea to take them to a vet.</p>
      <h2 id="how-to-safely-give-tuna-to-your-dog">How to safely give tuna to your dog?</h2>
      <p>Tuna is safest when fed in a small amount as an occasional treat. Feed either fresh tuna that has been cooked and served plain, or a small amount of tinned tuna that comes in spring water.</p>
      <h2 id="what-types-of-tuna-can-dogs-eat">What types of tuna can dogs eat?</h2>
      <p>Let’s go into more detail over the kinds of tuna safest for a dog’s snack…</p>
      <h3 id="can-dogs-eat-tinned-tuna">Can dogs eat tinned tuna?</h3>
      <p>Tinned tuna is perhaps the most common tuna to exist in human homes, so it makes sense if you’ve wondered whether your hungry pooch can have some. This depends what the tuna comes served in:</p>
      <p>X Tuna in sunflower oil - No. Sunflower oil adds a lot of unnecessary fat to a portion of tuna and puts pooches at a higher risk of a stomach upset and pancreatitis.</p>
      <p>X Tuna in brine - No. Brine is much too high in sodium to feed to a dog, so avoid tuna that has been soaked in it.</p>
      <p>✔ Tuna in spring water - Yes, this is the safest way for your pooch to get a bite of tuna, but again, make sure it’s only fed as a treat, not a regular part of your dog’s meal rotation.</p>
      <h3 id="can-dogs-eat-tuna-steak">Can dogs eat tuna steak?</h3>
      <p>Only feed your dog a small amount of tuna steak if it has been cooked plain without any added salt, sauces or flavourings. Though it will contain healthy omega-3 fatty acids and protein, tuna steak may still contain mercury, so should be fed to dogs only very occasionally.</p>
      <h3 id="can-dogs-eat-tuna-pasta">Can dogs eat tuna pasta?</h3>
      <p>No - it’s best to avoid pasta with tuna. Pasta is a very starchy carbohydrate with little nutritional benefit to a dog, while tuna should only be fed plain as an occasional treat.</p>
      <h3 id="can-dogs-eat-tuna-mayo">Can dogs eat tuna mayo?</h3>
      <p>Avoid feeding your dog anything mixed with mayonnaise. Though some plain tuna in spring water is fine as a treat for a dog, tuna mayo has much too high a fat content and is very calorific for a pooch.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>Tuna is, in general, safe for a dog - it contains essential omega-3 fatty acids, vitamins and protein. However, due to its high mercury levels, it should be fed in small amounts as an occasional treat for dogs - not included as part of their regular diet. Ideally, there are other fish options that are safer.</p>
      <p>If you give your dog some tuna, make sure it’s either cooked tuna steak, served plain; or tinned tuna served in spring water, not brine or oil.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you want to feed your pooch a nutrient-rich fish, there are other tasty options that are safer than tuna.</p>
      <ul>
        <li>Salmon, another oily fish rich in protein and omega-3.</li>
        <li>Mackerel, another nutritious fish full of essential fatty acids.</li>
        <li>Dog food with cod, for fishy goodness that is gentle on digestion.</li>
        <li>Salmon Oil for Dogs can be drizzled over a dog’s regular food for a condensed shot of omega-3 and 6.</li>
      </ul>
      <p>If you’re looking for healthy and nutritious food for your dog, Pooch & Mutt’s grain-free dog food and healthy snacks for dogs are made with natural, whole ingredients and a host of veggies and supplements.</p>
`,
  headings: [
    { id: 'is-tuna-good-for-dogs', text: 'Is tuna good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits', text: 'What are the health benefits?', level: 3 },
    { id: 'can-puppies-eat-tuna', text: 'Can puppies eat tuna?', level: 2 },
    { id: 'when-is-tuna-unsafe-for-dogs', text: 'When is tuna unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-tuna', text: 'Can dogs be allergic to tuna?', level: 3 },
    { id: 'can-tuna-make-dogs-sick', text: 'Can tuna make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-tuna-to-your-dog', text: 'How to safely give tuna to your dog?', level: 2 },
    { id: 'what-types-of-tuna-can-dogs-eat', text: 'What types of tuna can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-tinned-tuna', text: 'Can dogs eat tinned tuna?', level: 3 },
    { id: 'can-dogs-eat-tuna-steak', text: 'Can dogs eat tuna steak?', level: 3 },
    { id: 'can-dogs-eat-tuna-pasta', text: 'Can dogs eat tuna pasta?', level: 3 },
    { id: 'can-dogs-eat-tuna-mayo', text: 'Can dogs eat tuna mayo?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},
'can-dogs-eat-salmon': {
  title: 'Can dogs eat Salmon?',
  category: 'Pets',
  snippet: "Yes - dogs can eat salmon! This pink, fleshy fish is one of the healthiest foods a dog can eat; but it must be prepared correctly and included as part of a balanced, nutritious diet. Let’s go into the array of health benefits of salmon and discuss the best way to serve it to your hungry pooch…",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_SALMON_500x_crop_center.jpg?v=1708459634",
    alt: "Can dogs eat Salmon?",
    caption: "Is salmon good for dogs?"
  },
  content: `
<h2 id="is-salmon-good-for-dogs">Is salmon good for dogs?</h2>
      <p>Salmon is a healthy option for most dogs. Salmon is not only super tasty for pooches, it’s also packed with nutrients that offer a party of health benefits in a dog’s body. There are exceptions, however, depending on how well your pooch digests oily fish.</p>
      <h3 id="what-are-the-health-benefits-of-salmon">What are the health benefits of salmon?</h3>
      <p>Let’s unpack all the ways eating salmon is beneficial to a dog’s health:</p>
      <ul>
        <li>Rich in Omega-3 Fatty Acids. These essential fatty acids contribute to good skin and coat condition, boost the nervous system, heart function and brain health, and act as an anti-inflammatory (to reduce pain in a dog’s joints, for instance). A dog’s body can’t produce these fatty acids on their own, so must receive them from food, such as oily fish.</li>
        <li>Lean Protein. Salmon is a nutritious source of lean protein, which is fundamental to muscle development, repair and strength. Lean proteins are the cornerstone of a healthy canine diet - so if your pooch is allergic to chicken or beef, salmon is a great alternative.</li>
        <li>Vitamins D & B12, Niacin and Pyridoxine; critical for skin and bone health, boosting the immune system and metabolising energy.</li>
        <li>Super tasty. Dogs love the taste of juicy salmon, which means they’ll feel satisfied and full when it’s part of their meal.</li>
      </ul>
      <h2 id="can-puppies-eat-salmon">Can puppies eat salmon?</h2>
      <p>Puppies can definitely eat salmon, so long as it’s freshly prepared, cooked and served in tiny pieces without any bones or seasoning. Salmon is a great protein source for puppies that will help develop their strength as they grow.</p>
      <h2 id="when-is-salmon-unsafe-for-dogs">When is salmon unsafe for dogs?</h2>
      <p>Though it’s full of healthy nutrients, there are a few ways in which salmon can be unsafe.</p>
      <ul>
        <li>The most obvious is if the salmon isn’t fresh, as fish can easily spoil and carry bacteria. Be sure to choose fresh salmon from a reputable fishmonger or supermarket - if frozen, defrost it thoroughly and cook well before serving.</li>
      </ul>
      <ul>
        <li>Salmon can be unsafe when served with bones, or when covered in seasoning or flavourings. Sushi, smoked or cured salmon is also not advisable.</li>
      </ul>
      <ul>
        <li>If your pooch has pancreatitis or any other digestive issue, salmon might not be the best food for them. Be sure to check with your vet first.</li>
      </ul>
      <ul>
        <li>There’s a small chance your dog may have an allergy to salmon, which also can make it an unsafe food.</li>
      </ul>
      <h3 id="can-dogs-be-allergic-to-salmon">Can dogs be allergic to salmon?</h3>
      <p>Your dog may have a salmon, fish or seafood allergy, so it’s important to introduce the food slowly if they haven’t eaten it before. Serve a small portion of salmon and watch over your pooch in the hours following. If they show any of the following signs, don’t include salmon in their diet:</p>
      <ul>
        <li>Extended or severe diarrhoea or vomiting</li>
        <li>Swelling, redness or itchiness of the skin</li>
        <li>Change in behaviour (lethargic, low mood etc.)</li>
        <li>Ear infections</li>
        <li>Breathing issues (wheezing, etc.)</li>
        <li>Bloating or pain in stomach</li>
      </ul>
      <h3 id="can-salmon-make-dogs-sick">Can salmon make dogs sick?</h3>
      <p>Salmon will usually make a dog very happy, but as with all foods, it can make a pooch sick if prepared incorrectly or if their digestive systems don’t respond to it. If the salmon isn’t fresh, is marinated in sauces or flavourings, or if you feed your pooch only salmon, it could negatively impact their digestive system and make them unwell.</p>
      <p>If your dog has issues digesting fats (for example if they have pancreatitis) you may be better off feeding your dog a protein option that’s lower in fat.</p>
      <h2 id="how-to-safely-give-salmon-to-your-dog">How to safely give salmon to your dog?</h2>
      <p>The general rule with salmon is to prepare a fresh piece of fish without bones, cook it plain (either pan-fried, steamed or in the oven) and serve without seasoning or flavourings. This way it remains healthy and nutritious with the lowest risk of upsetting your pooch’s tum. If you decide to feed your dog a home-cooked diet with salmon as the base ingredient, it’s important to consult with a nutritionist first, to ensure your pooch is getting all the nutrients they need.</p>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>Salmon can be fed to your dog as part of a balanced diet, and can make up the protein portion of a meal (the majority!). You can safely feed your dog salmon every day if they don’t have any allergic reactions and enjoy it (lucky pooch).</p>
      <h3 id="can-dogs-with-pancreatitis-eat-salmon">Can dogs with pancreatitis eat salmon?</h3>
      <p>It’s not recommended. Dogs with pancreatitis suffer with difficulty digesting fats, and salmon is an oily fish with a high amount of fatty acids. Though these are highly beneficial to most dogs, it might cause harm to a dog with pancreatitis, who could struggle to digest it and become ill. Speak to your vet for advice first if you’re worried about feeding salmon to your dog.</p>
      <h2 id="what-types-of-salmon-can-dogs-eat">What types of salmon can dogs eat?</h2>
      <p>Let’s go into more detail over the best types of salmon to feed your pooch…</p>
      <h3 id="can-dogs-eat-salmon-fillet">Can dogs eat salmon fillet?</h3>
      <p>Yes! A fresh salmon fillet, de-boned and cooked plain is one of the healthiest ways to feed salmon to your pooch. Just be sure the fillet isn’t marinated in sauce or flavourings or coated in salt. Cook it either in a pan, oven-roasted or steamed.</p>
      <h3 id="can-dogs-eat-smoked-salmon">Can dogs eat smoked salmon?</h3>
      <p>No - smoked salmon isn’t recommended, whether it’s cold-smoked or hot-smoked salmon. As it’s cured, the sodium content is greatly increased, which will only have negative impacts on your dog’s heart rate and digestive system. It’s probably not going to harm your pooch if they accidentally eat a piece of smoked salmon, but don’t feed it to them intentionally.</p>
      <h3 id="can-dogs-eat-salmon-skin">Can dogs eat salmon skin?</h3>
      <p>Yes, salmon skin, or salmon scales, is a safe food for dogs. Just be sure it’s cooked along with the rest of the salmon, and isn’t covered in any salt or seasoning. Fried salmon skin is ok for dogs to eat, again so long as it’s not coated in anything. Served plain, salmon skin will contain a lot of the beneficial nutrients that salmon fillet does.</p>
      <h3 id="can-dogs-eat-raw-salmon">Can dogs eat raw salmon?</h3>
      <p>No, it’s preferable to serve the salmon cooked. Raw or uncooked salmon is more at risk of being contaminated by harmful bacteria, which can be killed off in the cooking process.</p>
      <h3 id="can-dogs-eat-cooked-salmon">Can dogs eat cooked salmon</h3>
      <p>Yes - cooked is the preferred way to serve salmon to your pooch. Lightly cooking a piece of fresh salmon, such as pan-frying, poaching or baking, without any added salt or flavourings, is the safest way for your dog to eat salmon.  Try to remove all the bones before cooking, too, to avoid unnecessary choking hazards.</p>
      <h3 id="can-dogs-eat-tinned---canned-salmon">Can dogs eat tinned / canned salmon?</h3>
      <p>No - it’s not a great idea to feed tinned salmon to your pooch. Tinned fish tends to be soaked in brine, oil or other flavourings which can raise the salmon’s sodium and fat content. It also won’t contain all the delicious nutrients of fresh salmon.</p>
      <p>It might be ok to feed a small amount of tinned salmon in spring water, but freshly cooked salmon is always the better option.</p>
      <h3 id="can-dogs-eat-red---pink-salmon">Can dogs eat red / pink salmon?</h3>
      <p>Yes. The varying colour of salmon depends on the fish’s diet, and means red salmon has a firmer texture and stronger flavour. Both pink and red salmon are suitable for a dog to eat, and both are full of nutritious omega fatty acids. Just be sure the salmon is de-boned, cooked well and served plain without seasonings.</p>
      <h3 id="can-dogs-eat-salmon-paste">Can dogs eat salmon paste?</h3>
      <p>No - commercial salmon paste isn’t recommended as it’s usually full of salt and additives which reduce its nutritional value to a pooch. If your dog wants a taste of delicious salmon, feed them some healthy dog food with salmon, or some fresh salmon you’ve prepared yourself.</p>
      <h3 id="can-dogs-eat-salmon-heads">Can dogs eat salmon heads?</h3>
      <p>The flesh of a salmon is preferable to the full heads, due to choking hazards - but if the heads are cleaned, cooked and soft enough to eat, you can offer them to your pooch.  They’re full of beneficial nutrients just like the rest of a salmon. If they were frozen, make sure they’re fully defrosted before cooking.</p>
      <h3 id="can-dogs-eat-salmon-bones">Can dogs eat salmon bones?</h3>
      <p>It’s not recommended to feed any fish with bones to your pooch, even if the bones seem quite soft. There could be bigger, tricker bones within a full fish or fillet that pose a dangerous choking hazard. Ask a fishmonger to debone a piece of salmon, or debone it yourself, before serving.</p>
      <h3 id="can-dogs-eat-frozen-salmon">Can dogs eat frozen salmon?</h3>
      <p>Yes - freezing fish keeps it fresh and retains its goodness! But frozen salmon must be fully defrosted and cooked before your pooch takes a bite. Frozen fish won’t be kind to your dog’s digestion and could make them ill.</p>
      <p>If the salmon has been frozen just to preserve, and is then cooked, it should still contain lots of its goodness, such as omega fatty acids and protein.</p>
      <h3 id="can-dogs-eat-salmon-oil">Can dogs eat salmon oil?</h3>
      <p>Yes - salmon oil is hugely beneficial to a lot of dogs. As a lot of the goodness from salmon comes from its oil which is full of essential fatty acids omega 3 and 6, fish oil is a popular supplement for dogs. Salmon oil for dogs can contribute to good skin and coat condition, brain and heart function, a boosted immune system and it can reduce inflammation (in a dog’s joints, for instance).</p>
      <p>Just be wary if your pooch has pancreatitis - fish oil may not be suitable for them. Talk to a vet first if you have any concerns about feeding your dog a fish oil supplement.</p>
      <h3 id="can-dogs-eat-raw-salmon-sushi-sashimi">Can dogs eat raw salmon sushi/sashimi?</h3>
      <p>Though raw salmon for sushi, or sashimi, is prepared for safe human consumption, it’s still not recommended to feed it to your dog.</p>
      <p>Sashimi grade salmon may have been salted or cured, and the salmon used in sushi may have been soaked in soy sauce or another condiment unsuitable for pooches to eat. There may be hidden wasabi, or some other seasoning that dogs will find distressing on the palate!</p>
      <p>If the sushi uses raw fish, this may contain parasites or bacteria that are unsafe for a pooch. Best keep the sushi as a human treat.</p>
      <h3 id="is-my-dog-at-risk-of-poisoning-from-salmon">Is my dog at risk of poisoning from salmon?</h3>
      <p>No, it’s highly unlikely. Salmon that’s available in the UK is typically caught locally or in Scandinavia - meaning we don’t need to worry about the presence of Rickettsial organisms in raw fish like they do in other parts of the world, like the USA. However, cooked salmon is always the safest way to feed your pooch.</p>
      <h3 id="conclusion">Conclusion</h3>
      <ul>
        <li>Overall, salmon is a nutrient-rich food for dogs, full of helpful omega fatty acids and lean protein. Salmon can be included as part of a balanced, well-rounded doggy diet.</li>
      </ul>
      <ul>
        <li>That said, it’s important to speak to a vet before feeding your pooch too much salmon. As it’s an oily fish, it may not be suitable for all dogs, particularly if they have pancreatitis or other issues digesting fats.</li>
      </ul>
      <ul>
        <li>Fresh salmon, de-boned and well cooked without added salt or seasoning is the safest way to serve it to your pooch. Avoid smoked salmon, or raw salmon, to be sure your dog is getting the safest dose of fishy goodness.</li>
      </ul>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you’re keen on feeding your dog salmon, but you’re looking for other nutritious alternatives, why not try these?</p>
      <b>We have two tasty options of dry dog food with salmon; Health & Digestion and Joint Care</b>
      <ul>
        <li>Herring, or dog food with herring -  a novel protein source that helps support sensitive digestion.</li>
        <li>Mackerel, another beneficial oily fish.</li>
        <li>Cod, long-lasting chews with cod, or dog food with cod - another nutritious fish, gentle on digestion</li>
        <li>Salmon Oil for dogs, for a dose of fishy nutrients to be drizzled over their regular food</li>
        <li>Chicken, or Grain-free dog food with chicken, for a lean protein that’s lower in fat.</li>
      </ul>
      <p>If you think your pooch could benefit from the multiple nutrients provided by oily fish, Pooch & Mutt has a range of supplements for dogs that use salmon or salmon oil. Get in touch with us if you have any further questions about feeding salmon to dogs.</p>
`,
  headings: [
    { id: 'is-salmon-good-for-dogs', text: 'Is salmon good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits-of-salmon', text: 'What are the health benefits of salmon?', level: 3 },
    { id: 'can-puppies-eat-salmon', text: 'Can puppies eat salmon?', level: 2 },
    { id: 'when-is-salmon-unsafe-for-dogs', text: 'When is salmon unsafe for dogs?', level: 2 },
    { id: 'can-dogs-be-allergic-to-salmon', text: 'Can dogs be allergic to salmon?', level: 3 },
    { id: 'can-salmon-make-dogs-sick', text: 'Can salmon make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-salmon-to-your-dog', text: 'How to safely give salmon to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'can-dogs-with-pancreatitis-eat-salmon', text: 'Can dogs with pancreatitis eat salmon?', level: 3 },
    { id: 'what-types-of-salmon-can-dogs-eat', text: 'What types of salmon can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-salmon-fillet', text: 'Can dogs eat salmon fillet?', level: 3 },
    { id: 'can-dogs-eat-smoked-salmon', text: 'Can dogs eat smoked salmon?', level: 3 },
    { id: 'can-dogs-eat-salmon-skin', text: 'Can dogs eat salmon skin?', level: 3 },
    { id: 'can-dogs-eat-raw-salmon', text: 'Can dogs eat raw salmon?', level: 3 },
    { id: 'can-dogs-eat-cooked-salmon', text: 'Can dogs eat cooked salmon', level: 3 },
    { id: 'can-dogs-eat-tinned---canned-salmon', text: 'Can dogs eat tinned / canned salmon?', level: 3 },
    { id: 'can-dogs-eat-red---pink-salmon', text: 'Can dogs eat red / pink salmon?', level: 3 },
    { id: 'can-dogs-eat-salmon-paste', text: 'Can dogs eat salmon paste?', level: 3 },
    { id: 'can-dogs-eat-salmon-heads', text: 'Can dogs eat salmon heads?', level: 3 },
    { id: 'can-dogs-eat-salmon-bones', text: 'Can dogs eat salmon bones?', level: 3 },
    { id: 'can-dogs-eat-frozen-salmon', text: 'Can dogs eat frozen salmon?', level: 3 },
    { id: 'can-dogs-eat-salmon-oil', text: 'Can dogs eat salmon oil?', level: 3 },
    { id: 'can-dogs-eat-raw-salmon-sushi-sashimi', text: 'Can dogs eat raw salmon sushi/sashimi?', level: 3 },
    { id: 'is-my-dog-at-risk-of-poisoning-from-salmon', text: 'Is my dog at risk of poisoning from salmon?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},
'can-dogs-eat-liver': {
  title: 'Can Dogs Eat Liver?',
  category: 'Pets',
  snippet: "Yes, dogs can eat liver - liver is a tasty and nutritious food for dogs. However it should only be fed in moderation, as high amounts of liver can have negative effects on your hungry pooch.",
  featuredImage: {
    url: "https://cdn.poochandmutt.co.uk/cdn/shop/articles/BLOG_CAN_DOGS_EAT_LIVER_500x_crop_center.jpg?v=1710763212",
    alt: "Can Dogs Eat Liver?",
    caption: "Is liver good for dogs?"
  },
  content: `
<p>Read on for the answers to all your questions over whether dogs can eat liver, the health benefits of liver for dogs, and how often you can serve liver as a dog’s dinner time treat.</p>
      <h2 id="is-liver-good-for-dogs">Is liver good for dogs?</h2>
      <p>Liver is a very nutrient-dense organ, so yes it is good for dogs to eat, but only in moderation. Not only does liver provide a host of vitamins and minerals for dogs, they also absolutely love the taste, so sneaking a small serving of liver in your dog’s bowl is sure to get their tail wagging.</p>
      <h3 id="what-are-the-health-benefits">What are the health benefits?</h3>
      <p>Liver is very rich in iron, as well as other nutrients like copper, zinc and essential fatty acids. Let’s go into why the attributes of liver are so beneficial to a dog’s health:</p>
      <ul>
        <li>Rich in iron, crucial for a dog’s haemoglobin production and oxygenating the blood.</li>
        <li>Copper and zinc, for boosted immunity and healthy enzyme function.</li>
        <li>Lots of vitamins - including B vitamins, important for cells and the nervous system; and vitamin A to encourage healthy skin, coat condition and vision.</li>
        <li>Essential fatty acids for a host of benefits, including cognitive function, joint health and a healthy heart.</li>
        <li>Source of protein, vital for muscle growth and maintenance.</li>
        <li>Tastes delicious so will get your pooch eating without hesitation.</li>
      </ul>
      <h2 id="when-is-liver-unsafe-for-dogs">When is liver unsafe for dogs?</h2>
      <p>The biggest risk factor with liver is that it’s rich in Vitamin A, so if they eat too much, dogs can suffer from vitamin A toxicity. This can lead to bone and joint issues, stomach upset or even signs of nervous system dysfunction.</p>
      <p>Liver, and any other organ meat is very high in purines, so also needs to be avoided by pooches that are prone to purine stones (urate or xanthine).</p>
      <p>To be extra safe, liver should be served cooked rather than raw. It should also be fed in moderation to dogs, as an occasional treat rather than a regular food. Remember to feed as part of a nutritious, well-rounded diet; alongside a mix of lean proteins, delicious fruit and vegetables, and supplements.</p>
      <h2 id="can-puppies-eat-liver">Can puppies eat liver?</h2>
      <p>Liver is safe to feed a puppy in small amounts - however it’s best to feed your young pup food that’s specific to their needs. Choose a healthy, grain-free puppy food to be certain your pup’s getting the nutrition they need.</p>
      <h3 id="can-dogs-be-allergic-to-liver">Can dogs be allergic to liver?</h3>
      <p>Some dogs can be allergic to liver. To be sure your pooch can stomach some tasty liver, feed a tiny amount if they’ve not tried it before. Keep an eye on them after feeding to see if there are any adverse reactions, such as vomiting, diarrhoea, skin rashes or breathing difficulties.</p>
      <h3 id="can-liver-make-dogs-sick">Can liver make dogs sick?</h3>
      <p>The biggest risk of feeding liver to your pooch is if they receive too much vitamin A. Vitamin A toxicity can lead to distressing symptoms such as stomach issues, nervous system problems, or in the long term, bone growth dysfunction. So long as you don’t feed your dog liver every day, they shouldn’t have any issues.</p>
      <p>Of course, if your pooch is allergic to liver, liver will likely make them sick. Look to feed your dog other sources of protein if this is the case.</p>
      <h2 id="how-to-safely-give-liver-to-your-dog">How to safely give liver to your dog?</h2>
      <p>The safest way of feeding liver to your dog is to assure it’s fresh and well cooked - the most nutritious way is to boil or oven bake it. If you pan-fry it, use a low fat oil. Cut the liver into bite-sized pieces for your pooch before serving.</p>
      <p>Be sure the liver is plain and doesn’t contain any other flavourings or additions such as onion or garlic, as these are toxic to dogs.</p>
      <h3 id="how-much-is-safe-to-give-your-dog">How much is safe to give your dog?</h3>
      <p>As mentioned, it’s important to regard liver as an occasional treat as part of a healthy, well-balanced diet, so don’t give a large amount or feed it to your dog every day. If you consider it a treat, then liver (and other treats) should make up no more than 10% of your dog’s diet. The portion size will depend on the breed and size of your dog - get in touch with your vet for specifics.</p>
      <h2 id="what-kinds-of-liver-can-dogs-eat">What kinds of liver can dogs eat?</h2>
      <p>Liver comes in all varieties, so let’s go into more detail over which kinds of liver are recommended for your dog.</p>
      <h3 id="can-dogs-eat-raw-liver">Can dogs eat raw liver?</h3>
      <p>It’s not the best idea to feed your dog raw liver. Though some dog owners swear by a raw food diet, vets generally advise that cooking meat and offal makes it less likely to carry bacteria or contaminants. Cook it either by boiling, oven-roasting or frying in a small amount of low-fat oil, and make sure it’s plain, without flavourings.</p>
      <h3 id="can-dogs-eat-lamb’s-liver">Can dogs eat lamb’s liver?</h3>
      <p>Yes. Just like other kinds of liver, lamb’s liver is a great source of protein, and is rich in vitamins and minerals such as iron, so is safe for dogs to eat. Feed in moderation as an occasional treat alongside a mix of other tasty lean proteins.</p>
      <h3 id="can-dogs-eat-chicken-liver">Can dogs eat chicken liver?</h3>
      <p>Yes, chicken liver is a nutritious food for dogs. Just as with other kinds of liver, chicken liver contains a lot of protein, vitamins and minerals that have many health benefits for dogs - but it should be fed in moderation.</p>
      <h3 id="can-dogs-eat-pig’s-liver">Can dogs eat pig’s liver?</h3>
      <p>It’s safe for your dog to eat pork liver, but there are a few things to note. Firstly, it has less fat content than chicken liver, so could be considered a leaner source of protein - but importantly, there are also fewer nutrients. If you’re going for nutrition, chicken or lamb’s liver might be a better choice.</p>
      <h3 id="can-dogs-eat-liver-pate">Can dogs eat liver pate?</h3>
      <p>Liver pate isn’t recommended for a pooch. Pate rarely comes in an unflavoured format - there are usually lots of flavourings and additives to give it that delectable, creamy texture. It’s also usually much higher in fat, and less nutrient dense. For a dog to get all the benefits of liver (protein, iron, essential fatty acids), go for the liver itself rather than in a pate format.</p>
      <h3 id="conclusion">Conclusion</h3>
      <p>In summary, dogs can eat iron-rich liver as a nutritious treat alongside a healthy well-balanced diet. Be sure the liver is fed in moderation, safely cooked, and avoid added flavourings such as you’d find in liver pate.</p>
      <h3 id="what-other-foods-can-dogs-safely-eat">What other foods can dogs safely eat?</h3>
      <p>If you like the sound of liver but you’re considering other nutritious foods for dogs, why not try the following?</p>
      <p>Salmon as a lean protein and a source of nutritious fatty acids. As a powerful supplement version, try omega-rich Salmon Oil for Dogs.</p>
      <p>Chicken, a nutritious lean protein that can be fed regularly to your dog as opposed to just occasionally.</p>
      <p>High-protein dog food, with the meaty goodness of ostrich and lamb for dogs who need extra protein.</p>
      <p>Kidneys or heart are other beneficial organ meats to feed to your dog in moderation.</p>
      <p>Try our natural, grain-free dog food in a range of tasty recipes using nutritious, whole ingredients - the perfect choice for your pooch’s physical and mental wellbeing.</p>
`,
  headings: [
    { id: 'is-liver-good-for-dogs', text: 'Is liver good for dogs?', level: 2 },
    { id: 'what-are-the-health-benefits', text: 'What are the health benefits?', level: 3 },
    { id: 'when-is-liver-unsafe-for-dogs', text: 'When is liver unsafe for dogs?', level: 2 },
    { id: 'can-puppies-eat-liver', text: 'Can puppies eat liver?', level: 2 },
    { id: 'can-dogs-be-allergic-to-liver', text: 'Can dogs be allergic to liver?', level: 3 },
    { id: 'can-liver-make-dogs-sick', text: 'Can liver make dogs sick?', level: 3 },
    { id: 'how-to-safely-give-liver-to-your-dog', text: 'How to safely give liver to your dog?', level: 2 },
    { id: 'how-much-is-safe-to-give-your-dog', text: 'How much is safe to give your dog?', level: 3 },
    { id: 'what-kinds-of-liver-can-dogs-eat', text: 'What kinds of liver can dogs eat?', level: 2 },
    { id: 'can-dogs-eat-raw-liver', text: 'Can dogs eat raw liver?', level: 3 },
    { id: 'can-dogs-eat-lamb’s-liver', text: 'Can dogs eat lamb’s liver?', level: 3 },
    { id: 'can-dogs-eat-chicken-liver', text: 'Can dogs eat chicken liver?', level: 3 },
    { id: 'can-dogs-eat-pig’s-liver', text: 'Can dogs eat pig’s liver?', level: 3 },
    { id: 'can-dogs-eat-liver-pate', text: 'Can dogs eat liver pate?', level: 3 },
    { id: 'conclusion', text: 'Conclusion', level: 3 },
    { id: 'what-other-foods-can-dogs-safely-eat', text: 'What other foods can dogs safely eat?', level: 3 },
  ]

},
};