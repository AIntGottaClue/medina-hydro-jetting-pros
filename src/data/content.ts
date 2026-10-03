export const images = {
  network: { f: '23fa53cf', alt: 'Clean industrial pipe network on a structural wall' },
  valve: { f: 'f240e413', alt: 'High-pressure water burst from a jetting valve' },
  jet: { f: '1ef32499', alt: 'High-pressure water jet in use' },
  junction: { f: 'affe4d15', alt: 'Industrial pipe junction on brick architecture' },
  drain: { f: 'a9ff76d5', alt: 'Technician working on a drain line inside a wall' },
  commercial: { f: '0eddb674', alt: 'Commercial facility piping and conduit runs' },
  inspect: { f: '46d7ba08', alt: 'Technician examining mechanical utility lines' },
  underground: { f: '335b5501', alt: 'Underground sewer pipe junction' },
  whitepipe: { f: '3155335c', alt: 'Clean white drain pipe detail' },
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
    slug: 'medina', name: 'Medina', kind: 'City', image: 'junction',
    short: 'Full hydro jetting coverage across the city, from the square to the edge of town.',
    h1: 'Hydro Jetting in Medina, Ohio',
    intro: 'Medina is the Medina County seat, and the lines under it range from older homes close to the square to newer subdivisions toward the edges of town. We jet the drain and sewer lines serving both, and verify every one on camera.',
    local: [
      ['Older homes near the center', 'Homes built long ago can have older lateral pipe, joints that let roots in, and decades of scale on the walls. A camera pass first tells us how much pressure that pipe should see.'],
      ['Newer subdivisions', 'Newer lines rarely fail from age. Grease, wipes, and a low spot that collects sediment are the usual causes, and a jet clears them cleanly.'],
      ['Downtown and commercial kitchens', 'Restaurants and shops around the square push grease into their lines daily. Scheduled jetting keeps those lines open.'],
    ],
    note: 'Medina County Sanitary Engineers serve the City of Medina, the City of Brunswick, and several townships. If a problem sits in the public main rather than your own lateral, the county, not us, is who to call. Our camera footage helps show which side the problem is on.',
    faq: [
      ['Do you jet main sewer laterals in Medina?', 'Yes. We jet the private lateral from your cleanout out to the property line. A camera pass first shows whether the blockage is grease, roots, scale, or a damaged section.'],
      ['Can you tell if the blockage is in the city main?', 'The camera usually can. If footage shows the line is clear up to the public main, you have what you need to contact the utility.'],
    ],
  },
  {
    slug: 'brunswick', name: 'Brunswick', kind: 'City', image: 'valve',
    short: 'Residential and commercial jetting along the I-71 corridor north of Medina.',
    h1: 'Hydro Jetting in Brunswick, Ohio',
    intro: 'Brunswick sits just north of Medina along I-71. It is a large residential city with plenty of single-family neighborhoods and a busy commercial strip, so we see both kitchen-line grease problems and root-filled laterals.',
    local: [
      ['Residential laterals', 'Mature trees along older streets are a common reason a lateral slows or backs up. Jetting cuts the roots and scours the wall, and the camera shows how far the roots reached.'],
      ['Strip and retail kitchens', 'Restaurants and food service along the commercial corridors need grease lines cleared on a schedule, not after a backup.'],
      ['Recurring slow drains', 'If a main drain slows every few months, repeat maintenance jetting is often cheaper in time and hassle than waiting for the next backup.'],
    ],
    note: 'Medina County Sanitary Engineers maintain sanitary sewers for the City of Brunswick. Your private lateral, from the house to the connection, is your responsibility, and that is the part we clean.',
    faq: [
      ['Do you serve both homes and businesses in Brunswick?', 'Yes. We jet residential drains and laterals as well as commercial kitchen and grease lines.'],
      ['How do I know if I need jetting or just a snake?', 'If a line keeps coming back after being snaked, buildup on the pipe wall is the likely cause. A camera shows it, and jetting removes it.'],
    ],
  },
  {
    slug: 'wadsworth', name: 'Wadsworth', kind: 'City', image: 'jet',
    short: 'High-pressure line cleaning for homes and businesses in Wadsworth.',
    h1: 'Hydro Jetting in Wadsworth, Ohio',
    intro: 'Wadsworth is a city west of Medina with a mix of long-established neighborhoods and newer homes. Older lines tend to collect scale and roots, so a camera pass before jetting matters here.',
    local: [
      ['Established neighborhoods', 'Older clay or cast iron laterals can be rough on the inside, which catches grease and paper. Jetting smooths the flow without cutting into the pipe.'],
      ['Small business lines', 'Cafes, shops, and shared building drains can clog from grease and debris. We clear floor drains and mop sink lines as well as kitchen lines.'],
      ['Mixed housing ages', 'Within one neighborhood the pipe material can change house to house. We set pressure and nozzle for the line in front of us, not a default.'],
    ],
    note: 'Ask your utility or the city which entity owns the sewer in front of your property. We clean the private side and document what the camera sees.',
    faq: [
      ['Is jetting safe for older pipes in Wadsworth?', 'It can be, when pressure and nozzle are matched to the pipe. That is why we inspect first and calibrate before we scour.'],
      ['Do you clear floor drains and mop sink lines?', 'Yes. These lines collect grease and sediment in commercial buildings and respond well to jetting.'],
    ],
  },
  {
    slug: 'montville-township', name: 'Montville Township', kind: 'Township', image: 'drain',
    short: 'Jetting for township properties on septic-connected and municipal lines.',
    h1: 'Hydro Jetting in Montville Township, Ohio',
    intro: 'Montville Township covers a mix of properties, and drainage setups vary from one street to the next. Some homes connect to sewer and some rely on septic systems, so the first question on any call is where your line goes.',
    local: [
      ['Sewer-connected homes', 'For homes on sewer, we jet the lateral from the cleanout toward the connection, and use the camera to confirm the line is clear.'],
      ['Septic-served homes', 'We jet drain lines inside the house and out to the tank inlet. We do not clean or pump septic tanks or work on leach fields.'],
      ['Roots and scale', 'Rural lots often have mature trees close to buried lines, so root intrusion is a frequent finding on camera.'],
    ],
    note: 'Not sure whether your property is on sewer or septic? Check your utility bill or ask the county. It changes the plan, and we will ask about it first.',
    faq: [
      ['Do you clean septic tanks?', 'No. We jet drain and sewer lines. Tank pumping and leach field work need a septic contractor.'],
      ['Can you jet a line that runs to a septic tank?', 'We can jet the line from the house to the tank inlet. We confirm the layout before we start.'],
    ],
  },
  {
    slug: 'granger-township', name: 'Granger Township', kind: 'Township', image: 'whitepipe',
    short: 'Root and scale removal for newer and established neighborhoods in Granger Township.',
    h1: 'Hydro Jetting in Granger Township, Ohio',
    intro: 'Granger Township has both newer developments and long-established properties. Newer lines mostly fail from grease and debris. Older ones add roots and scale to the list.',
    local: [
      ['Newer developments', 'Plastic laterals in newer homes clear well with moderate pressure. The camera confirms there are no sags holding water.'],
      ['Established properties', 'Mature landscaping close to buried lines raises the odds of root intrusion. Jetting cuts roots back to the pipe wall instead of only punching a hole through them.'],
      ['Kitchen and laundry lines', 'Branch lines inside the house clog from soap, lint, and grease. We can jet those too, from the nearest cleanout or access point.'],
    ],
    note: 'If you see water backing up in more than one fixture, the problem is often in the main line rather than a single drain. Tell us which fixtures are affected when you call.',
    faq: [
      ['What are the signs of roots in a sewer line?', 'Slow drains, gurgling, and repeat backups at the lowest fixtures are common signs. A camera confirms it.'],
      ['Will jetting stop roots from coming back?', 'Jetting clears the roots that are there. Roots can regrow toward moisture, so some lines need maintenance jetting.'],
    ],
  },
  {
    slug: 'litchfield', name: 'Litchfield', kind: 'Township', image: 'commercial',
    short: 'Rural and residential line scouring across Litchfield.',
    h1: 'Hydro Jetting in Litchfield, Ohio',
    intro: 'Litchfield is a rural township area southwest of Medina. Properties tend to have longer runs, larger lots, and a mix of sewer and septic setups, so we start every job by working out how your line is laid out.',
    local: [
      ['Long drain runs', 'A long run from house to outlet gives debris more room to settle. Jetting moves it out in one pass and the camera confirms the result.'],
      ['Larger lots with mature trees', 'Roots reach buried lines on lots with older trees. We cut them out and show you the before and after.'],
      ['Septic-connected homes', 'We clean the drain line from the house to the tank inlet. Tank pumping is a separate trade.'],
    ],
    note: 'For rural properties, give us the closest cleanout location and the age of the home when you call. It helps us plan access.',
    faq: [
      ['Do you travel out to rural properties?', 'Yes. Litchfield is within our service area. Call and tell us where the property is.'],
      ['Do I need a cleanout for you to jet my line?', 'A cleanout makes access easy. If there is none, we look at other access points, such as a removable fixture, and tell you what is workable.'],
    ],
  },
  {
    slug: 'chippewa-lake', name: 'Chippewa Lake', kind: 'Village', image: 'inspect',
    short: 'Drain and sewer jetting for lake-area properties around Chippewa Lake.',
    h1: 'Hydro Jetting in Chippewa Lake, Ohio',
    intro: 'Chippewa Lake is a small lake community, and many properties are on compact lots with older plumbing. Short, tight lines with older pipe call for careful pressure, and the camera tells us what the pipe can take.',
    local: [
      ['Compact lots', 'Close quarters mean buried lines run near foundations and trees. We inspect first to avoid putting pressure where the pipe is already damaged.'],
      ['Older plumbing', 'Older homes may have scale-narrowed lines or joints that roots have found. A camera pass shows both.'],
      ['Seasonal and part-time use', 'Lines that sit unused for weeks can build up residue. A scheduled jetting visit before the busy season can help.'],
    ],
    note: 'If a drain backs up after a long period of non-use, mention it when you call. It points us toward residue buildup rather than a break.',
    faq: [
      ['Can you inspect a line before I buy or open a seasonal home?', 'We can run a camera through accessible lines and show you what we see.'],
      ['How often should a lake-area home line be jetted?', 'There is no fixed schedule. A camera inspection shows how much buildup is on the wall and whether maintenance jetting makes sense.'],
    ],
  },
  {
    slug: 'seville', name: 'Seville', kind: 'Village', image: 'network',
    short: 'Full-diameter pipe cleaning a short run west of Medina.',
    h1: 'Hydro Jetting in Seville, Ohio',
    intro: 'Seville is a village a short drive west of Medina. Many homes are older, with their original plumbing, and small businesses sit along the village center. Both do well with a camera-first approach.',
    local: [
      ['Original plumbing in older homes', 'Older lines have had decades to collect scale. Jetting restores the opening, as long as the pipe is sound enough to take it, which we check first.'],
      ['Village-center businesses', 'Small food service and shops share drain lines that can clog from grease and debris. We clear them and document the result.'],
      ['Slow main drains', 'When a main drain is slow everywhere in the house, the cause is usually downstream, and the camera finds it.'],
    ],
    note: 'We never promise a result before the camera has run the line. If the footage shows a break or collapse, we tell you jetting will not fix it.',
    faq: [
      ['What if the camera finds a broken pipe?', 'We show you the footage and tell you plainly that jetting will not fix a break. Repair needs a different contractor.'],
      ['Do you serve businesses in Seville?', 'Yes. We jet commercial drain and grease lines as well as residential ones.'],
    ],
  },
  {
    slug: 'valley-city', name: 'Valley City', kind: 'Community', image: 'underground',
    short: 'Camera inspection and jetting for the Liverpool Township area around Valley City.',
    h1: 'Hydro Jetting in Valley City, Ohio',
    intro: 'Valley City is an unincorporated community in Liverpool Township, in the northeast corner of Medina County. We jet drain and sewer lines for homes and businesses across the area.',
    local: [
      ['Residential lines', 'Slow drains and repeat backups at the lowest fixtures are the usual calls. We camera the line, jet it, and camera it again.'],
      ['Businesses along the main roads', 'Shops and food service need grease and floor drain lines kept open. We can schedule recurring visits.'],
      ['Sewer and septic mix', 'Setups vary by street. We ask where your line goes before we plan the work.'],
    ],
    note: 'Medina County Sanitary Engineers operate a wastewater treatment plant in Liverpool Township. Whether your property is connected to county sewer or on septic, tell us when you call.',
    faq: [
      ['Is Valley City inside your service area?', 'Yes. Valley City and the Liverpool Township area are on our list of communities.'],
      ['How do I request service?', 'Call {{phone}} or send the form on any page with what your line is doing.'],
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
