export const images = {
  jet: { f: 'jetting-nozzle-spray', alt: 'Hydro jetting nozzle spraying high-pressure water' },
  valve: { f: 'nozzle-in-pipe', alt: 'High-pressure jetting nozzle firing inside a pipe' },
  network: { f: 'clean-pipe-bore', alt: 'Looking down a scoured, clean pipe toward daylight' },
  junction: { f: 'multi-port-nozzle', alt: 'Multi-port jetting nozzle spraying water around a pipe bore' },
  drain: { f: 'residential-cleanout-jetting', alt: 'Technician feeding a jetting hose into a home cleanout' },
  commercial: { f: 'grease-trap-cleanout', alt: 'Technician jetting a grease line through a commercial kitchen cleanout' },
  inspect: { f: 'camera-inspection-tablet', alt: 'Technician watching a sewer camera feed on a tablet' },
  underground: { f: 'root-cutting', alt: 'Jetting nozzle cutting tree roots out of a buried pipe' },
  whitepipe: { f: 'scoured-pipe-view', alt: 'View through a freshly jetted pipe' },
  grease: { f: 'grease-buildup', alt: 'Jet nozzle clearing grease buildup in a commercial kitchen line' },
  yard: { f: 'yard-root-jetting', alt: 'Technician jetting a root-blocked lateral in a residential yard' },
  scale: { f: 'scale-removal', alt: 'Jet nozzle scouring scale off a heavily corroded pipe' },
  pump: { f: 'jetter-at-cleanout', alt: 'Technician running a jetter hose into a cleanout beside a house' },
  sweep: { f: 'clean-sweep', alt: 'Nozzle pulling back through a clean white drain line' },
  reel: { f: 'hose-reel-jetter', alt: 'Technician at a hose-reel jetter next to a cleanout' },
  rootmacro: { f: 'roots-in-line', alt: 'Jet nozzle spraying through roots inside a sewer pipe' },
  macro: { f: 'nozzle-scale-macro', alt: 'Jetting nozzle spraying inside a scale-lined pipe' },
  beforeafter: { f: 'before-after-line', alt: 'A clogged pipe end beside the same pipe scoured clean' },
  blueprint: { f: 'jet-spray-pattern', alt: 'Jetting nozzle throwing a ring of spray inside a pipe' },
};

export const services = [
  {
    slug: 'hydro-jetting', name: 'Hydro Jetting', path: 'hydro-jetting/',
    blurb: 'High-pressure scouring that strips buildup off pipe walls instead of poking a hole through it.',
  },
  {
    slug: 'residential-drain-cleaning', name: 'Residential Drain Cleaning', path: 'services/residential-drain-cleaning/',
    blurb: 'Kitchen lines, laundry lines, and main sewer laterals restored to full diameter.',
  },
  {
    slug: 'commercial-grease-lines', name: 'Commercial and Grease Lines', path: 'services/commercial-grease-lines/',
    blurb: 'Scheduled jetting for restaurants and facilities fighting grease-laden lines.',
  },
  {
    slug: 'sewer-camera-inspection', name: 'Sewer Camera Inspection', path: 'services/sewer-camera-inspection/',
    blurb: 'See exactly what is inside the line, before the jet and after it.',
  },
];

export const process = [
  { n: '01', t: 'Inspect', d: 'A camera runs the line first, so the plan matches the actual problem.' },
  { n: '02', t: 'Calibrate', d: "Nozzle and pressure are matched to the pipe's material and condition." },
  { n: '03', t: 'Scour', d: 'The jet strips grease, scale, and roots off the wall, back to full diameter.' },
  { n: '04', t: 'Verify', d: 'The camera runs again. You see the clean line for yourself.' },
];

export const areas = [
  {
    slug: "medina", name: "Medina", kind: "City", image: "blueprint",
    short: "Camera-first line cleaning for homes and shops around the historic square and the neighborhoods beyond it.",
    h1: "Hydro Jetting in Medina, Ohio",
    intro: "Medina was founded in 1818 and became the Medina County seat when it incorporated as a village in 1835. After fires in 1848 and 1870, much of the square was rebuilt over close to ten years, which is why the downtown blocks share a Victorian look. Lines under the older streets and the newer subdivisions have very different histories, and the camera tells us which kind we are working in.",
    local: [
      ["Older streets near the square", "Homes and buildings from the canal and beekeeping-supply era can sit on older lateral pipe with joints that let roots in. We run the camera first so the nozzle and pressure suit what the pipe can take."],
      ["Newer subdivisions toward the edge of town", "Later lines rarely fail from age. Grease, wipes, and a low spot that holds sediment are the usual causes, and a jet clears them back to the pipe wall."],
      ["Shops and kitchens around the square", "Restaurants and shops in the rebuilt downtown blocks push grease into their lines every day. Scheduled jetting keeps those lines open between backups."],
    ],
    note: "Medina County Sanitary Engineers maintain the sewer main and the lateral inside the public right-of-way. The homeowner is responsible for the lateral from the house to the main, which is the part we clean. The county advises that repair or replacement of a lateral needs a permit from its Permits Division before the work starts, so camera footage of a damaged section is worth keeping.",
    faq: [
      ["Who is responsible for the sewer line in Medina?", "The county maintains the main and the lateral within the public right-of-way. You are responsible for the lateral from your house to the main. We jet and film that private run."],
      ["Can the camera show which side of the property line a problem is on?", "Often it can. If the footage shows a clear line up to the main, you have what you need when you call the county. If it shows a break, it also helps for permit questions."],
    ],
  },
  {
    slug: "brunswick", name: "Brunswick", kind: "City", image: "yard",
    short: "Residential line cleaning in the largest city in Medina County.",
    h1: "Hydro Jetting in Brunswick, Ohio",
    intro: "Brunswick is the largest city in Medina County, with 35,426 residents at the 2020 census. It was first settled in 1815 and incorporated as a city in 1960, and its housing is mostly single-family. Wherever mature trees meet older lateral pipe, roots are the problem we expect to find on camera, along with grease in kitchen lines.",
    local: [
      ["Roots on mature lots", "Trees planted along suburban streets grow toward the moisture in a sewer lateral. Jetting cuts roots back to the pipe wall, and the camera shows how far they reached."],
      ["Kitchen and laundry branch lines", "Branch lines inside the house clog from grease, soap, and lint. We can jet them from the nearest cleanout and then confirm the main is clear."],
      ["Slow drains that keep returning", "If a main drain slows again a few months after being snaked, buildup on the pipe wall is the likely reason. Jetting removes it instead of boring a hole through it."],
    ],
    note: "Brunswick sewers are maintained by Medina County Sanitary Engineers, the same department that handles Medina. The private lateral from the house to the main belongs to the homeowner, and that is the line we jet.",
    faq: [
      ["Who do I call if the blockage is in the street main in Brunswick?", "Medina County Sanitary Engineers maintain the sanitary main. If our camera shows the line is clear up to the main, share the footage when you call them."],
      ["Do you serve homes and businesses in Brunswick?", "Yes. We jet residential drains and laterals as well as commercial kitchen and grease lines."],
    ],
  },
  {
    slug: "wadsworth", name: "Wadsworth", kind: "City", image: "scale",
    short: "Lateral jetting in a city with its own sewer system and a documented history of storm-related backups.",
    h1: "Hydro Jetting in Wadsworth, Ohio",
    intro: "Wadsworth sits in the south of Medina County, about 12 miles southwest of Akron. It was founded in 1814 and incorporated as a city in 1931. Unlike Medina and Brunswick, the city owns and maintains its own separate sanitary sewer system and wastewater treatment plant, and its engineering department has published a handbook on why sewers back up here.",
    local: [
      ["Backups during heavy rain", "The city's own handbook says storm water gets into sanitary sewers during rainstorms and causes basement backups. Foundation drains, roof downspouts, and sump pumps tied into the sanitary line are named as contributors."],
      ["Roots and broken service lines", "The same handbook lists a private service line that is broken or partly plugged with roots as a main cause of backups. We jet out the roots and use the camera to find a damaged section."],
      ["Floor drains in older basements", "Sewage in a basement usually comes up through the lowest drain first. A clear, jetted lateral gives the line more room when the main is running full."],
    ],
    note: "Wadsworth's handbook asks residents to report a sewer backup to the city as soon as it happens and before calling a plumber. Maintenance and repair of the service line from the building to the main is the building owner's responsibility.",
    faq: [
      ["Is the sewer in Wadsworth run by the county?", "No. The city of Wadsworth owns and maintains its own sanitary sewer system and treatment plant, so call the city about the main and a plumber for your service line."],
      ["Will jetting stop rain backups in Wadsworth?", "Not by itself. If storm water is entering the sanitary system through your own drains or downspouts, that has to be disconnected. Jetting clears roots and buildup so your lateral carries what it should."],
    ],
  },
  {
    slug: "montville-township", name: "Montville Township", kind: "Township", image: "pump",
    short: "Jetting for township homes, whether the line runs to county sewer or to a septic tank.",
    h1: "Hydro Jetting in Montville Township, Ohio",
    intro: "Montville Township covers about 21 square miles south of the city of Medina, and the first settlers arrived in 1819. Some streets are served by county sewer and some are not, and the township publishes sewer service area and hydric soil maps for that reason. The first question on any call is where your line goes.",
    local: [
      ["Homes on county sewer", "For homes connected to county sewer, we jet the lateral from the cleanout toward the main and film it before and after."],
      ["Homes on septic", "On septic, we jet the drain line from the house to the tank inlet. We do not clean or pump tanks or work on leach fields."],
      ["Wet ground", "The township keeps a hydric soils map, which marks ground that stays wet. Roots and soil movement near buried lines are worth a camera check on those lots."],
    ],
    note: "Not sure which side you are on? Check the township's sewer service area map or call the Medina County Sanitary Engineers. If the property can reach a sanitary sewer, the county health department requires a connection and a permitted septic abandonment.",
    faq: [
      ["Do you clean septic tanks?", "No. We jet drain and sewer lines. Tank pumping and leach field work need a septic contractor."],
      ["How do I find out if my street has county sewer?", "The township posts a sewer service area map on its utilities page, and the county sanitary engineers can confirm your address."],
    ],
  },
  {
    slug: "granger-township", name: "Granger Township", kind: "Township", image: "sweep",
    short: "Line cleaning on the east side of Medina County, next to the Summit County line.",
    h1: "Hydro Jetting in Granger Township, Ohio",
    intro: "Granger Township was organized in 1820 and sits on the east side of Medina County, bordering Summit County. It has no incorporated city or village inside it, and about 4,500 people live there. With no town center of its own, homes are spread along township roads and in subdivisions, and the line layout changes from street to street.",
    local: [
      ["Spread-out homes", "Longer runs from the house to the outlet give debris more room to settle. One pass of the jet moves it out, and the camera confirms the result."],
      ["Established properties with large trees", "Mature landscaping near buried pipe raises the odds of roots in the line. We cut them back to the pipe wall."],
      ["Septic or sewer, street by street", "Some Granger homes are on septic and some reach county sewer. We ask where your line goes before we plan the work."],
    ],
    note: "There is no city or village inside Granger Township to run a sewer system, so the question is whether your address is served by county sanitary sewer or by a household septic system permitted through the Medina County Health Department.",
    faq: [
      ["Does Granger Township have its own sewer system?", "There is no city or village in the township. Sewer service where it exists comes from the county, and other homes use septic systems the county health department permits and inspects."],
      ["Do you travel to Granger Township?", "Yes. Call and tell us the road and which fixtures are affected."],
    ],
  },
  {
    slug: "litchfield", name: "Litchfield", kind: "Township", image: "reel",
    short: "Drain-line jetting for septic-served homes in the west of Medina County.",
    h1: "Hydro Jetting in Litchfield, Ohio",
    intro: "Litchfield Township lies in the west part of Medina County, and the unincorporated community of Litchfield sits at its center. About 3,200 people live in the township. Its 2006 land use plan says sanitary sewer service is not available in Litchfield and that there were no plans to extend it, so homes here rely on on-site septic systems.",
    local: [
      ["House to tank", "We jet the drain and building sewer line from the house to the septic tank inlet and film it. Tank pumping and leach field work are a separate trade."],
      ["Wet soils", "The township's land use plan names the Mahoning and Ellsworth soil groups and lists wetness among their limits. Slow drains after a wet stretch are worth a camera look."],
      ["Large lots, long runs", "A long run from house to tank lets debris settle. A jet pass moves it out in one go."],
    ],
    note: "The Medina County Health Department permits and inspects household sewage systems in the township. If a system is failing, contact the health department for permit information. Tell us the closest cleanout and the age of the home when you call, since that helps us plan access.",
    faq: [
      ["Is there public sewer in Litchfield Township?", "The township's land use plan says sanitary sewer service is not available and no extension was planned, so most homes use septic systems."],
      ["Do I need a cleanout for you to jet my line?", "A cleanout makes access easy. Without one, we look at other access points, such as a removable fixture, and tell you what is workable."],
    ],
  },
  {
    slug: "chippewa-lake", name: "Chippewa Lake", kind: "Village", image: "rootmacro",
    short: "Drain and sewer line jetting for homes in the village around Ohio's largest natural inland lake.",
    h1: "Hydro Jetting in Chippewa Lake, Ohio",
    intro: "The village of Chippewa Lake was incorporated in 1920 and had 654 residents at the 2020 census. It sits on Chippewa Lake, a 330-acre natural lake left by glaciers and the largest natural inland lake in Ohio. The lake itself is owned by the Medina County Park District, and the village lists Medina County Sanitary Engineers as its water and sewer provider.",
    local: [
      ["Small village lots", "Homes sit close together and buried lines often run near foundations and trees. We film first so we do not put pressure on a section that is already damaged."],
      ["Lines near the lakeshore", "Homes near the water sit on low ground. If drains slow after heavy rain, a camera pass shows whether roots or buildup are the cause."],
      ["County sewer connection", "Because the village is on county sewer, the lateral from the house to the main is the owner's to maintain. That is the line we jet."],
    ],
    note: "For questions about the sewer main or treatment plant, contact Medina County Sanitary Engineers, the provider the village names on its services page.",
    faq: [
      ["Who provides sewer service in Chippewa Lake?", "The village's services page lists Medina County Sanitary Engineers for water and sewer."],
      ["Can you inspect a line before I buy a home here?", "We can run a camera through accessible lines and show you what we see."],
    ],
  },
  {
    slug: "seville", name: "Seville", kind: "Village", image: "macro",
    short: "Camera inspection and jetting in a village due south of Medina.",
    h1: "Hydro Jetting in Seville, Ohio",
    intro: "Seville is a village of 2,335 people in the south of Medina County, about seven miles directly south of the city of Medina. It was platted in 1828 and got a post office in 1830. A wastewater treatment plant owned by Medina County sits on Kennard Road in the village.",
    local: [
      ["Older homes near the center", "Homes platted in the 1800s can have original or early replacement laterals with decades of scale. We film first and set the pressure for what the pipe can take."],
      ["Small businesses in the village center", "Cafes and shops share lines that clog with grease and debris. We clear floor drains, mop sink lines, and kitchen lines."],
      ["Slow main drains", "When a main drain is slow in every fixture, the cause is usually downstream, and the camera finds it."],
    ],
    note: "We never promise a result before the camera has run the line. If the footage shows a break or collapse, we say jetting will not fix it, and you will need a repair contractor.",
    faq: [
      ["What if the camera finds a broken pipe in Seville?", "We show you the footage and say plainly that jetting will not fix a break. Repair needs a different contractor."],
      ["Do you serve businesses in Seville?", "Yes. We jet commercial drain and grease lines as well as residential ones."],
    ],
  },
  {
    slug: "valley-city", name: "Valley City", kind: "Community", image: "beforeafter",
    short: "Camera inspection and jetting in the Liverpool Township community of Valley City.",
    h1: "Hydro Jetting in Valley City, Ohio",
    intro: "Valley City is an unincorporated community of 943 people in the center of Liverpool Township, in the northern part of Medina County. Liverpool Township was established in 1816 and is credited as the first permanent settlement in the county. The West Branch of the Rocky River runs along the community's eastern edge and Plum Creek crosses its west side.",
    local: [
      ["Homes along the creek valleys", "Low ground near the river and creek is worth a camera check when drains run slow after heavy rain."],
      ["Shops along Center and Columbia Roads", "Businesses at the crossing of State Routes 303 and 252 need grease and floor drain lines kept open."],
      ["Sewer or septic, street by street", "Setups vary around the community. We ask where your line goes before we plan the work."],
    ],
    note: "Medina County Sanitary Engineers run the Liverpool Waste Water Treatment Plant, which also takes septage from registered haulers. Whether your property is on county sewer or septic, tell us when you call.",
    faq: [
      ["Is Valley City inside your service area?", "Yes. Valley City and the Liverpool Township area are on our list of communities."],
      ["How do I request service?", "Call {{phone}} or send the form on any page with what your line is doing."],
    ],
  },
];

export const faqs = [
  ['What is hydro jetting?', 'Hydro jetting uses a high-pressure stream of water, up to 4000 PSI, fed through a specialized nozzle to scour the inside of a pipe. Instead of boring a small hole through a clog, the jet strips grease, sludge, scale, and roots off the pipe wall and flushes the debris out of the line.'],
  ['How is hydro jetting different from snaking?', 'A snake bores a hole through a clog and leaves the buildup on the pipe wall. A jet scours the full diameter of the pipe, so the line is less likely to re-narrow as debris collects again.'],
  ['Is hydro jetting safe for my pipes?', 'It is safe for sound pipe when pressure and nozzle are matched to the material and condition. That is why every job starts with a camera inspection. If footage shows a break, collapse, or badly damaged section, jetting is not the right tool, and we tell you so.'],
  ['How much pressure does a hydro jetter use?', 'Our equipment runs up to 4000 PSI. We do not run it at full pressure on every line. The setting depends on what the camera shows about the pipe.'],
  ['Can hydro jetting remove tree roots?', 'Yes. The jet cuts roots out of the line and scours them off the pipe wall. Roots can regrow toward moisture, so some lines need maintenance jetting.'],
  ['Do you clean commercial grease lines?', 'Yes. We jet kitchen lines, floor drains, and mop sink lines for restaurants and commercial facilities, either once or on a recurring schedule.'],
  ['Do I need a camera inspection before jetting?', 'We run the camera first on every job. It tells us what is in the line and what the pipe can take, and the second pass afterward shows the result.'],
  ['Which areas do you serve?', 'Medina, Brunswick, Wadsworth, Montville Township, Granger Township, Litchfield, Chippewa Lake, Seville, and Valley City. If you are near Medina, call and ask.'],
  ['Do you only do hydro jetting?', 'Yes. We focus on high-pressure water jetting and the camera work that supports it. We do not do pipe repair or replacement.'],
  ['How do I request service?', 'Call {{phone}} or send the form on any page. Tell us which drains are affected and what you have noticed.'],
];
