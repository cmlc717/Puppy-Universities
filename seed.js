const {db} = require('./server/db');
const Students = require('./server/db/models/students');
const Campus = require('./server/db/models/campus');

const students = [{
    firstName: 'Ren',
    lastName: 'Carlos',
    email: 'rencarlos@university.edu',
    imageUrl: '/renCropped.jpeg',
    gpa: 4.0
}, {
    firstName: 'Jericho',
    lastName: 'Laraya',
    email: 'jericholaraya@university.edu',
    imageUrl: '/jericho.jpeg',
    gpa: 2.0
}, {
    firstName: 'Nala',
    lastName: 'Ticona',
    email: 'nalaticona@university.edu',
    imageUrl: '/nala.jpg',
    gpa: 3.5
}, {
    firstName: 'Mochi',
    lastName: 'Santos',
    email: 'mochisantos@university.edu',
    imageUrl: '/mochi.png',
    gpa: 3.0
}, {
    firstName: 'Butter',
    lastName: 'Rojas',
    email: 'butterrojas@university.edu',
}, {
    firstName: 'Hulk',
    lastName: 'Lot',
    email: 'hulklot@university.edu',
}, {
    firstName: 'Chanel',
    lastName: 'Cacanindin',
    email: 'chanelcacanindin@university.edu',
}, {
    firstName: 'Onyx',
    lastName: 'Soemarsono',
    email: 'onyxsoemarsono@university.edu',
}, {
    firstName: 'Tiger',
    lastName: 'Nida',
    email: 'tigernida@university.edu',
}, {
    firstName: 'Simba',
    lastName: 'Sonny',
    email: 'simbasonny@university.edu',
}, {
    firstName: 'Chewy',
    lastName: 'Ollie',
    email: 'chewyollie@university.edu',
}, {
    firstName: 'Dobby',
    lastName: 'Ollie',
    email: 'dobbyollie@university.edu',
}, {
    firstName: 'Benjamina',
    lastName: 'Buttons',
    email: 'benjaminabuttons@university.edu',
}, {
    firstName: 'Buzz',
    lastName: 'Lightyear',
    email: 'buzzlightyear@university.edu',
}, {
    firstName: 'Yana',
    lastName: 'Ticona',
    email: 'yanaticona@university.edu',
}, {
    firstName: 'Sugar',
    lastName: 'Santos',
    email: 'sugarsantos@university.edu',
}, {
    firstName: 'Elmo',
    lastName: 'Poodle',
    email: 'elmopoodle@university.edu',
}, {
    firstName: 'Luka',
    lastName: 'Poodle',
    email: 'lukapoodle@university.edu',
}, {
    firstName: 'Lily',
    lastName: 'Poodle',
    email: 'lilypoodle@university.edu',
}, {
    firstName: 'Rex',
    lastName: 'Pat',
    email: 'rexpat@university.edu',
}, {
    firstName: 'Happy',
    lastName: 'Pupper',
    email: 'happypupper@university.edu',
}, {
    firstName: 'Leo',
    lastName: 'Bee',
    email: 'leobee@university.edu',
}, {
    firstName: 'Bruno',
    lastName: 'Mars',
    email: 'brunomars@university.edu',
}, {
    firstName: 'Bob',
    lastName: 'Dylan',
    email: 'bobdylan@university.edu',
}, {
    firstName: 'Yeontan',
    lastName: 'Kim',
    email: 'butterrojas@university.edu',
}, {
    firstName: 'Maden',
    lastName: 'Joy',
    email: 'madenjoy@university.edu',
    gpa: 1.7
}, {
    firstName: 'Lulu',
    lastName: 'Lemon',
    email: 'lululemon@university.edu',
    gpa: 1.5
}, {
    firstName: 'Goofy',
    lastName: 'Goof',
    email: 'goofygoof@university.edu',
    gpa: 1
}, {
    firstName: 'Mickey',
    lastName: 'Moo',
    email: 'mickeymoo@university.edu',
    gpa: 1
}, {
    firstName: 'Minnie',
    lastName: 'Moo',
    email: 'minniemoo@university.edu',
}, {
    firstName: 'Pluto',
    lastName: 'Poo',
    email: 'plutopoo@university.edu',
}, {
    firstName: 'Cat',
    lastName: 'Dog',
    email: 'catdog@university.edu',
}, {
    firstName: 'Stimpy',
    lastName: 'Simp',
    email: 'stimpysimp@university.edu',
}, {
    firstName: 'Winnie',
    lastName: 'Pooh',
    email: 'winniepooh@university.edu',
}, {
    firstName: 'Callie',
    lastName: 'Cal',
    email: 'calliecal@university.edu',
}, {
    firstName: 'Bones',
    lastName: 'Bull',
    email: 'bonesbull@university.edu',
}, {
    firstName: 'Mary',
    lastName: 'Mae',
    email: 'marymae@university.edu',
}, {
    firstName: 'Woody',
    lastName: 'Andy',
    email: 'woodyandy@university.edu',
}, {
    firstName: 'Luna',
    lastName: 'Loo',
    email: 'lunaloo@university.edu',
}, {
    firstName: 'Tuff',
    lastName: 'Puppy',
    email: 'tuffpuppy@university.edu',
}, {
    firstName: 'Admiral Wolverine',
    lastName: 'Lightning-bolt',
    email: 'awlb@university.edu',
}, {
    firstName: 'Billy',
    lastName: 'Mandy',
    email: 'billymandy@university.edu',
}, {
    firstName: 'grim',
    lastName: 'bones',
    email: 'grimbones@university.edu',
}, {
    firstName: 'Ariana',
    lastName: 'Grande',
    email: 'arianagrande@university.edu',
}, {
    firstName: 'Taylor',
    lastName: 'Switft',
    email: 'taylorswift@university.edu',
}, {
    firstName: 'Ed',
    lastName: 'Sheeran',
    email: 'edsheeran@university.edu',
}, {
    firstName: 'Benito',
    lastName: 'Bunny',
    email: 'badbunny@university.edu',
}, {
    firstName: 'Daddy',
    lastName: 'Yankee',
    email: 'daddyyankee@university.edu',
}, {
    firstName: 'Snoop',
    lastName: 'Dog',
    email: 'snoopdog@university.edu',
}, {
    firstName: 'Snoop',
    lastName: 'Lion',
    email: 'snooplion@university.edu',
}, {
    firstName: 'Kanye',
    lastName: 'West',
    email: 'kanyewest@university.edu',
    gpa: 1
}, {
    firstName: 'Kim',
    lastName: 'Kardashian',
    email: 'kimkardashian@university.edu',
    gpa: 1.0
}, {
    firstName: 'Chris',
    lastName: 'Pratt',
    email: 'chrispratt@university.edu',
    gpa: 1.0
}, {
    firstName: 'Chris',
    lastName: 'Pines',
    email: 'chrispines@university.edu',
}, {
    firstName: 'Acorn',
    lastName: 'Alex',
    email: 'acornalex@university.edu',
}, {
    firstName: 'Atlas',
    lastName: 'Aspen',
    email: 'atlasaspen@university.edu',
}, {
    firstName: 'August',
    lastName: 'D',
    email: 'augustd@university.edu',
}, {
    firstName: 'Avery',
    lastName: 'Bacon',
    email: 'averybacon@university.edu',
}, {
    firstName: 'Baby',
    lastName: 'Bagel',
    email: 'babybagel@university.edu',
}, {
    firstName: 'Pete',
    lastName: 'Davidson',
    email: 'petedavidson@university.edu',
}, {
    firstName: 'Bambi',
    lastName: 'Bailey',
    email: 'bambibailey@university.edu',
}, {
    firstName: 'Basil',
    lastName: 'Bean',
    email: 'basilbean@university.edu',
}, {
    firstName: 'Bon',
    lastName: 'Bon',
    email: 'bonbon@university.edu',
}, {
    firstName: 'Biscuit',
    lastName: 'Bread',
    email: 'biscuitbread@university.edu',
}, {
    firstName: 'Bingo',
    lastName: 'Nameo',
    email: 'bingonameo@university.edu',
}, {
    firstName: 'Boots',
    lastName: 'Monkey',
    email: 'bootsmonkey@university.edu',
}, {
    firstName: 'Brandy',
    lastName: 'Brady',
    email: 'brandybrady@university.edu',
}, {
    firstName: 'Bronx',
    lastName: 'Brooklyn',
    email: 'bronxbrooklyn@university.edu',
}, {
    firstName: 'Butterscotch',
    lastName: 'Butters',
    email: 'butterscotchbutters@university.edu',
}, {
    firstName: 'Bubbles',
    lastName: 'Puff',
    email: 'bubblespuff@university.edu',
}, {
    firstName: 'Blossom',
    lastName: 'Puff',
    email: 'blossompuff@university.edu',
}, {
    firstName: 'Buttercup',
    lastName: 'Puff',
    email: 'buttercuppuff@university.edu',
}, {
    firstName: 'Brownie',
    lastName: 'Brown',
    email: 'browniebrown@university.edu',
}, {
    firstName: 'Chai',
    lastName: 'Latte',
    email: 'chailattee@university.edu',
}, {
    firstName: 'Cashew',
    lastName: 'Nuts',
    email: 'cashewnuts@university.edu',
}, {
    firstName: 'Charlie',
    lastName: 'Day',
    email: 'charlieday@university.edu',
    gpa: 0.5
}, {
    firstName: 'Dennis',
    lastName: 'Reynolds',
    email: 'dennisreynolds@university.edu',
    gpa: 2
}, {
    firstName: 'Dee',
    lastName: 'Reyndolds',
    email: 'deereynolds@university.edu',
}, {
    firstName: 'Frank',
    lastName: 'Reynolds',
    email: 'frankreynolds@university.edu',
}, {
    firstName: 'Mac',
    lastName: 'MacDonald',
    email: 'macmacdonald@university.edu',
}, {
    firstName: 'Chocolate',
    lastName: 'Cake',
    email: 'chocolatecake@university.edu',
}, {
    firstName: 'Cookie',
    lastName: 'Monster',
    email: 'chanelcacanindin@university.edu',
}, {
    firstName: 'Cotton',
    lastName: 'Candy',
    email: 'cottoncandy@university.edu',
}, {
    firstName: 'Cupid',
    lastName: 'Heart',
    email: 'cupidheart@university.edu',
}, {
    firstName: 'Curly',
    lastName: 'Stooge',
    email: 'curlystooge@university.edu',
}, {
    firstName: 'Dora',
    lastName: 'Explora',
    email: 'doraexplora@university.edu',
}, {
    firstName: 'Diego',
    lastName: 'Explora',
    email: 'diegoexplora@university.edu',
}, {
    firstName: 'Domino',
    lastName: 'Donut',
    email: 'dominodonut@university.edu',
}, {
    firstName: 'Ewok',
    lastName: 'Wooky',
    email: 'ewokwooky@university.edu',
}, {
    firstName: 'Espresso',
    lastName: 'Coffee',
    email: 'espressocoffee@university.edu',
}, {
    firstName: 'Fergie',
    lastName: 'Ferg',
    email: 'fergieferg@university.edu',
}, {
    firstName: 'Frenchie',
    lastName: 'Frosty',
    email: 'frenchiefrosty@university.edu',
}, {
    firstName: 'Gum',
    lastName: 'Drop',
    email: 'gumdrop@university.edu',
}, {
    firstName: 'Harley',
    lastName: 'Davidson',
    email: 'harleydavidson@university.edu',
}, {
    firstName: 'Honey',
    lastName: 'Buns',
    email: 'honeybuns@university.edu',
}, {
    firstName: 'Indie',
    lastName: 'Indigo',
    email: 'indieindigo@university.edu',
}, {
    firstName: 'Java',
    lastName: 'Bean',
    email: 'javabean@university.edu',
}, {
    firstName: 'Jelly',
    lastName: 'Bean',
    email: 'jellybean@university.edu',
}, {
    firstName: 'Jordan',
    lastName: 'Journey',
    email: 'jordanjourney@university.edu',
}, {
    firstName: 'Kit',
    lastName: 'Kat',
    email: 'butterrojas@university.edu',
}, {
    firstName: 'Twix',
    lastName: 'Snickers',
    email: 'twixsnickers@university.edu',
}]

const campuses = [{
    name: 'Tufts',
    imageUrl: 'https://www.usnews.com/dims4/USNEWS/8b31b69/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F2f%2Fcd373dee3a899eefd25a8e9970bed8%2F1_131021_7247_campusstock182.jpg',
    address: '419 Boston Ave, Medford, MA 02155',
    description: 'A private, liberal-arts university for quirky Jumbos.'
}, {
    name: 'UPenn',
    imageUrl: 'https://admissions.upenn.edu/sites/default/files/styles/16_9_scale_1920x1080/public/2018-05/college%20green_0.jpg?h=c6366e14&itok=arFJQEB_',
    address: 'University of, Philadelphia, PA 19104',
    description: 'An ivy-league university for smart dogs. All are welcome, not just Quakers.'
}, {
    name: 'Rutgers',
    imageUrl: 'https://www.rutgers.edu/sites/default/files/lg_NR17NewarkFall0185N_0.jpg',
    address: 'Conklin Hall, 175 University Ave, Newark, NJ 07103',
    description: 'A state univresity for Scarlet Knights who like playing football and riding the bus.'
}, {
    name: 'Harvard',
    imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/1209892117/0x0.jpg?format=jpg&width=1200',
    address: '3 Oxford St, Cambridge, MA 02138',
    description: 'An ivy-league university for wicked smaht dahgs.'
}, {
    name: 'UCLA',
    imageUrl: 'https://luskinconferencecenter.ucla.edu/wp-content/uploads/2018/03/Blog_Luskin.jpg',
    address: '757 Westwood Plaza #1621, Los Angeles, CA 90095',
    description: 'A west-coast university for summer-loving pups.'
}, {
    name: 'CSU',
    address: 'California, USA',
}, {
    name: 'NYU',
    address: 'NYC, NY, USA',
}, {
    name: 'Pace',
    address: 'NYC, NY, USA',
}, {
    name: 'Rutgers New Brunswick',
    address: 'New Brunswick, NJ',
}, {
    name: 'MIT',
    address: 'Cambridge, MA 02138',
}, {
    name: 'Boston University',
    address: 'Boston, MA, USA',
}, {
    name: 'Boston College',
    address: 'Boston, MA, USA',
}, {
    name: 'Lesley',
    address: 'Boston, MA, USA',
}, {
    name: 'UMass Boston',
    address: 'Boston, MA, USA',
}, {
    name: 'UMass Amherst',
    address: 'Amherst, MA, USA',
}, {
    name: 'Michigan State University',
    address: 'Michigan, USA',
}, {
    name: 'UMich',
    address: 'Ann Arbor, Michican, USA',
}, {
    name: 'Ohio State',
    address: 'Ohio, USA'
}, {
    name: 'Raritan Valley',
    address: 'Raritan, NJ, USA',
}, {
    name: 'Forham',
    address: 'NYC, NY, USA',
}, {
    name: 'Aldelphi',
    address: 'NYC, NY, USA',
}, {
    name: 'John Jay',
    address: 'NYC, NY, USA',
}, {
    name: 'NYIT',
    address: 'NYC, NY, USA',
}, {
    name: 'Montclair State',
    address: 'Montclair, NJ, USA',
}, {
    name: 'Kean',
    address: 'Elizabeth, NJ, USA',
}, {
    name: 'Columbia',
    address: 'NYC, NY, USA',
}, {
    name: 'Cornell',
    address: 'Ithaca, NY, USA',
}, {
    name: 'RPI',
    address: 'NY, USA',
}, {
    name: 'Emerson',
    address: 'MA, USA',
}, {
    name: 'Princeton',
    address: 'Princeton, NJ, USA',
}, {
    name: 'NJIT',
    address: 'Newark, NJ, USA',
}, {
    name: 'Yale',
    address: 'New Haven, CT',
}, {
    name: 'Dartmouth',
    address: 'NH, USA',
}, {
    name: 'Harvard',
    imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/1209892117/0x0.jpg?format=jpg&width=1200',
    address: '3 Oxford St, Cambridge, MA 02138',
    description: 'An ivy-league university for wicked smaht dahgs.'
}, {
    name: 'Stanford',
    address: 'CA, USA',
}, {
    name: 'UCHIC',
    address: 'Chicago, IL, USA',
}, {
    name: 'Johns Hopkins',
    address: 'Baltimore, MD, USA',
}, {
    name: 'UMaryland',
    address: 'MD, USA',
}, {
    name: 'CIT',
    address: 'Pasadena, CA, USA',
}, {
    name: 'Duke',
    address: 'Durham, NC, USA',
}, {
    name: 'Northwestern',
    address: 'IL, USA',
}, {
    name: 'Brown',
    address: 'Providence, RI, USA',
}, {
    name: 'Vanderbilt',
    address: 'Nashville, TN, USA',
}, {
    name: 'Rice',
    address: 'Houston, TX, USA',
}, {
    name: 'WashU',
    address: 'St. Louis, MO, USA',
}, {
    name: 'Notre Dame',
    address: 'Notre Dame, IN, USA',
}, {
    name: 'Berkeley',
    address: 'Berkeley, CA, USA',
    description: 'A west-coast university for summer-loving pups.'
}, {
    name: 'Carnegie Mellon',
    address: 'Pittsburg, PA, USA',
}, {
    name: 'Emory',
    address: 'Atlanda, GA, USA',
}, {
    name: 'Georgetown',
    address: 'Washington DC, USA',
}, {
    name: 'USC',
    address: 'LA, CA, USA',
}, {
    name: 'UVA',
    address: 'Charlottesville, VA, USA',
}, {
    name: 'UFlorida',
    address: 'FL, USA',
}, {
    name: 'UNC',
    address: 'Chapel Hill, NC, USA',
}, {
    name: 'Wake Forest University',
    address: 'NC, USA',
}, {
    name: 'UCSB',
    address: 'SB, CA, USA',
}, {
    name: 'UCI',
    address: 'Irvine, CA, USA',
}, {
    name: 'UCSD',
    address: 'San Diego, CA, USA',
}, {
    name: 'Rochester',
    address: 'Rochester, NY, USA',
}, {
    name: 'UC Davis',
    address: 'Davis, CA, USA',
}, {
    name: 'UT Austin',
    address: 'Austin, TX, USA',
}, {
    name: 'UWM',
    address: 'Madison, WI, USA',
}, {
    name: 'UIUC',
    address: 'Champaign, IL, USA',
}, {
    name: 'William and Mary',
    address: 'Williamsburg, VA, USA',
}, {
    name: 'Brandeis',
    address: 'MA, USA',
}, {
    name: 'Case Western',
    address: 'Cleveland, OH, USA',
}, {
    name: 'GIT',
    address: 'Atlanta, GA, USA',
}, {
    name: 'Northeastern',
    address: 'Boston, MA, USA',
}, {
    name: 'Tulane',
    address: 'New Orleans, LA, USA',
}, {
    name: 'UGeorgia',
    address: 'Athens, GA, USA',
}, {
    name: 'Lehigh',
    address: 'PA, USA',
}, {
    name: 'Purdue',
    address: 'West Lafayette, IN, USA',
}, {
    name: 'Villanova',
    address: 'Villanova, PA, USA',
}, {
    name: 'FSU',
    address: 'Talahasse, FL, USA',
}, {
    name: 'Pepperdine',
    address: 'Malibu, CA, USA',
}, {
    name: 'Santa Clara',
    address: 'Santa Clara, CA',
    description: 'A west-coast university for summer-loving pups.'
}, {
    name: 'UMiami',
    address: 'FL, USA',
}, {
    name: 'UWashington',
    address: 'Seattle, WA, USA',
}, {
    name: 'George Washington',
    address: 'Washington DC, USA',
}, {
    name: 'Syracuse',
    address: 'Syracuse, NY, USA',
    description: 'An ivy-league university for smart dogs. All are welcome, not just Quakers.'
}, {
    name: 'UMinesota',
    address: 'Minneapolis, MN, USA',
}, {
    name: 'UPitt',
    address: 'Pittsburg, PA, USA',
}, {
    name: 'Virginia Tech',
    address: 'VA, USA',
}, {
    name: 'Texas A&M',
    address: 'TX, USA'
}, {
    name: 'UCT',
    address: 'CT, USA',
}, {
    name: 'WPI',
    address: 'MA, USA',
}, {
    name: 'Yeshiva',
    address: 'NYC, NY, USA',
}, {
    name: 'American',
    address: 'Washington DC, USA',
}, {
    name: 'Indiana',
    address: 'Bloomington, IN, USA',
}, {
    name: 'NCSU',
    address: 'NC, USA',
}, {
    name: 'South Methodist',
    address: 'Dallas, TX, USA',
}, {
    name: 'Baylor',
    address: 'Waco, TX, USA',
}, {
    name: 'Clemson',
    address: 'SC, USA',
}, {
    name: 'Loya Marymount',
    address: 'LA, CA, USA',
    description: 'An ivy-league university for wicked smaht dahgs.'
}, {
    name: 'Penn State',
    address: 'University Park, PA, USA',
    description: 'A west-coast university for summer-loving pups.'
}, {
    name: 'SUNY',
    address: 'Stony Brook, NY, USA',
}, {
    name: 'Binghamton',
    address: 'Binghamton, NY, USA',
}, {
    name: 'Gonzaga',
    address: 'WA, USA',
}, {
    name: 'Marquette',
    address: 'WI, USA',
}, {
    name: 'Stevens',
    address: 'Hoboken, NJ, USA',
    description: 'An ivy-league university for wicked smaht dahgs.'
}, {
    name: 'UCSC',
    address: 'Santa Cruz, CA, USA',
    description: 'A west-coast university for summer-loving pups.'
}, {
    name: 'UIowa',
    address: 'Iowa City, IA, USA',
}, {
    name: 'Brigham Young',
    address: 'Provo, UT, USA',
}, {
    name: 'Elon',
    address: 'Elon, NC, USA',
}, {
    name: 'Colorodo School of Mines',
    address: 'Golden, CO, USA',
}, {
    name: 'Howard',
    address: 'Washington DC, USA',
}, {
    name: 'Texas Christian',
    address: 'TX, USA',
}, {
    name: 'UBuffalo',
    address: 'Buffalo, NY, USA',
}, {
    name: 'Auburn',
    address: 'AL, USA',
}, {
    name: 'Clark',
    address: 'Worcester, MA, USA',
}, {
    name: 'UColorodo Boulder',
    address: 'Coulder, CO, USA',
}, {
    name: 'UIC',
    address: 'Chicago, IL, USA',
}, {
    name: 'USF',
    address: 'FL, USA',
}, {
    name: 'Drexel',
    address: 'Philadelphia, PA, USA',
}, {
    name: 'RIT',
    address: 'Rochester, NY, USA',
}, {
    name: 'UArizona',
    address: 'AZ, USA',
    description: 'An ivy-league university for smart dogs. All are welcome, not just Quakers.'
}, {
    name: 'UDenver',
    address: 'Denver, CO, USA',
}, {
    name: 'USF',
    address: 'San Francisco, CA, USA',
}, {
    name: 'UUtah',
    address: 'Salt Lake City, UT, USA',
}, {
    name: 'Fairfield',
    address: 'Fairfield, CT, USA',
}, { 
    name: 'Wellesley',
    address: 'Wellesley, Ma, USA'
}];

const seed = async() => {
    try {
        await db.sync({force: true});
        const dbStudents = await Promise.all(students.map(student => Students.create(student)));
        const dbCampuses = await Promise.all(campuses.map(campus => Campus.create(campus)));
        await dbCampuses[0].addStudents(dbStudents[0]);
        await dbCampuses[1].addStudents(dbStudents[1]);
        await dbCampuses[2].addStudents(dbStudents[2]);
        await dbCampuses[1].addStudents(dbStudents[3]);
        await dbCampuses[1].addStudents(dbStudents[4]);
        await dbCampuses[0].addStudents(dbStudents[5]);
        await dbCampuses[0].addStudents(dbStudents[6]);
        await dbCampuses[0].addStudents(dbStudents[7]);
        await dbCampuses[2].addStudents(dbStudents[8]);
        await dbCampuses[3].addStudents(dbStudents[9]);
        await dbCampuses[3].addStudents(dbStudents[10]);
        await dbCampuses[4].addStudents(dbStudents[11]);
        await dbCampuses[4].addStudents(dbStudents[12]);
        for (let i = 13; i < dbStudents.length; i++) {
            await dbCampuses[i].addStudents(dbStudents[i]);
        }
        console.log('Database is seeded');
    } catch (err) {
        console.error('Database could not be seeded')
        console.error(err);
        db.close();
    }
}

seed();