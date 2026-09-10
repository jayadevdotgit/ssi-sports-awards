export type Person = { name: string; role: string; bio: string[] };
export type AwardeeGroup = { title: string; entries: Person[] };
export type AwardeeEdition = {
  year: number;
  tagline: string;
  intro: string;
  groups: AwardeeGroup[];
  quote: string;
};

export const hallOfFame = [
  { name: "Animesh Kujur", role: "Athlete" },
  { name: "Ankita Dhyani", role: "Athletics" },
  { name: "Ayush Shetty", role: "Badminton" },
  { name: "C. Ajithkumar", role: "Coach & Educator" },
  { name: "Deepa Grace Ekka", role: "Hockey" },
  { name: "Hari Prasad Pattnayak", role: "Coach" },
  { name: "Indian Women Ice Hockey Team", role: "Legend" },
  { name: "Jyothi Yarraji", role: "Athlete" },
  { name: "Neeraj Jha", role: "Journalist" },
  { name: "Nithya Gandhe", role: "Athlete" },
  { name: "O P Singh Karhana", role: "Thrower" },
  { name: "Rahul Banerjee", role: "Coach" },
  { name: "Ruhaan Alva", role: "4-Wheeler Racing" },
  { name: "Sajan Prakash", role: "Swimming" },
  { name: "Samardeep Singh", role: "Shot Putter" },
  { name: "Sarthak Chavan", role: "2-Wheeler Racer" },
  { name: "Sarthak Kamal", role: "Table Tennis" },
  { name: "Satwiksairaj Rankireddy", role: "Badminton" },
  { name: "Siksha Jain", role: "Golfer" },
  { name: "Tapan Mohanty", role: "Gymnastics" },
  { name: "Vikash Thakur", role: "Weight Lifting" },
  { name: "Wasim Jaffer", role: "Cricketer" },
  { name: "Dilip Tirkey", role: "Legend" },
  { name: "Manikanta H Hoblidhar", role: "Legend" },
  { name: "Odisha Women Football Team", role: "Legend" },
  { name: "Sandeep Sejwal", role: "Legend" },
  { name: "Srabani Nanda", role: "Legend" },
  { name: "Swasti Singh", role: "Legend" },
  { name: "Col Devidutta Panda", role: "Legend" },
  { name: "Pranati Nayak", role: "Legend" },
  { name: "Sandeep Kumar", role: "Legend" },
  { name: "Satish Shivalingam", role: "Legend" },
  { name: "Thakur Aditya", role: "Legend" },
  { name: "Vimal Kumar", role: "Legend" },
  { name: "Lalu Prasad Bhoi", role: "Legend" },
  { name: "K. Malleswari", role: "Legend" },
  { name: "Indian Men's Hockey Team", role: "Legend" },
  { name: "Bruno Cuntinho", role: "Legend" },
  { name: "Abdul Hakim Giri", role: "Legend" },
];

export const awardees2024: AwardeeEdition = {
  year: 2024,
  tagline: "Celebrating Excellence in Indian Sports",
  intro:
    "Join us as we honor the extraordinary champions, trailblazers, and institutions who have redefined Indian sports with their passion, perseverance, and performance.",
  groups: [
    {
      title: "Athletes",
      entries: [
        {
          name: "Aditya Thakur",
          role: "Rising Motorsport Star",
          bio: [
            "Aditya Thakur, a young and dynamic racer from India, has been making waves in the motorsport scene with his remarkable talent and determination.",
            "Starting his journey at a very young age, Aditya developed a passion for speed and precision, which quickly translated into competitive racing. His relentless dedication has made him one of the most promising names in Indian motorsport.",
          ],
        },
        {
          name: "Aneesh S. Gowda",
          role: "National Swimming Champion",
          bio: [
            "Aneesh S. Gowda is a top Indian swimmer from Bengaluru, Karnataka. He trains at the Basavangudi Aquatic Center and studies law at Christ University.",
            "Specializing in freestyle and medley events, he has won multiple national gold medals, including at the 2024 and 2025 Senior National Aquatic Championships. Aneesh has represented India internationally at events like the Asian Games.",
          ],
        },
        {
          name: "Animesh Kujur",
          role: "Odisha's Sprint Sensation",
          bio: [
            "Animesh Kujur, a 21-year-old sprinter from Odisha, has quickly risen to national prominence in Indian athletics.",
            "Originally a footballer, he shifted to sprinting during the COVID-19 lockdown. In just two and a half years, Animesh became the second-fastest Indian in the 200m event, recently breaking his own record with a time of 20.65 seconds.",
          ],
        },
        {
          name: "Lalu Prasad Bhoi",
          role: "Rising Sprint Star",
          bio: [
            "Lalu Prasad Bhoi, a 21-year-old sprinter from Lanjigarh, Kalahandi in Odisha, is a rising star in Indian athletics.",
            "A commerce student at KISS University, he trains at the Odisha–Reliance Foundation High-Performance Centre. He gained national attention by winning the 100m at the 2024 National Open Athletics Championship with a time of 10.46 seconds.",
          ],
        },
        {
          name: "Nithya Gandhe",
          role: "India's Fastest Woman",
          bio: [
            "Nithya Gandhe, a 24-year-old sprinter from Telangana, has emerged as one of India's top female athletes.",
            "She won gold in the 100m (11.41s) and bronze in the 200m at the Indian Grand Prix-3 in Bengaluru. At the 2024 National Open Athletics Championship, she was crowned the fastest woman with a winning time of 11.57 seconds in the 100m.",
          ],
        },
      ],
    },
    {
      title: "Coaches & Institutions",
      entries: [
        {
          name: "Abdul Hakim Giri",
          role: "Ice Hockey Pioneer",
          bio: [
            "Abdul Hakim Giri, born on September 2, 1977, in Ladakh, is the head coach of the Indian Women's Ice Hockey Team and a key figure in the sport's development in India.",
            "A former ice hockey player himself, he later trained abroad to become a certified referee and dedicated coach. He led the Indian women's team to their first-ever international competition in Chinese Taipei, marking a historic milestone.",
          ],
        },
      ],
    },
    {
      title: "Teams & Legends",
      entries: [
        {
          name: "Bruno Coutinho",
          role: "Football Legend",
          bio: [
            "Bruno Coutinho, a football legend from Goa, was one of India's most prominent players in the 1990s.",
            "He first represented India at just 18 during the Asian School Games in Brunei in 1987 and went on to captain the Indian U-23 team. He made his senior international debut in 1989 and later captained the Indian national team, earning the Arjuna Award in 2001.",
          ],
        },
        {
          name: "Diptiranjan Samal",
          role: "Sports Journalist",
          bio: [
            "Diptiranjan Samal, an accomplished journalist from Odisha, has steadily ascended in the realm of regional media.",
            "After earning a post-graduate degree in mass communication from Ravenshaw University, he kickstarted his career with Samaya in 2009. He's served in crucial roles across respected outlets before joining Sambad in 2014, where his insightful reporting continues to make an impact.",
          ],
        },
        {
          name: "Indian Men's Hockey Team",
          role: "National Pride",
          bio: [
            "The Indian Men's Hockey Team, currently ranked 5th in the FIH world rankings, continues to be a dominant force in international hockey.",
            "Led by captain Harmanpreet Singh, the team has shown resilience despite challenges. With a strong mix of experienced players and emerging talents, India aims to reclaim its past glory and strengthen its position on the global stage.",
          ],
        },
        {
          name: "Karnam Malleswari",
          role: "Olympic Weightlifting Icon",
          bio: [
            "Karnam Malleswari is a former Indian weightlifter and a trailblazer in Indian sports history.",
            "She became the first Indian woman to win an Olympic medal, securing a bronze in the 69 kg category at the 2000 Sydney Olympics. Her remarkable achievements earned her the prestigious Arjuna Award in 1994 and the Padma Shri in 1999.",
          ],
        },
      ],
    },
  ],
  quote:
    "At the SSI Sports Awards 2024, we celebrate the heroes behind the headlines — the athletes, coaches, and institutions who inspire us to dream bigger, run faster, and aim higher.",
};

export const awardees2023: AwardeeEdition = {
  year: 2023,
  tagline: "Celebrating Excellence in Indian Sports",
  intro:
    "Join us as we honor the extraordinary champions, trailblazers, and institutions who have redefined Indian sports with their passion, perseverance, and performance.",
  groups: [
    {
      title: "Athletes",
      entries: [
        {
          name: "Srabani Nanda",
          role: "Sprint Queen of India",
          bio: [
            "Srabani Nanda, born on May 7, 1991, in Phulbani, Odisha, is one of India's leading sprinters, specializing in the 100m, 200m, and 4×100m relay events.",
            "She represented India at the 2016 Rio Olympics in the 200m, where she clocked her personal best of 23.07 seconds. In 2025, she added to her accolades by winning a silver medal in the 4×100m relay at the Asian Athletics Championships in South Korea.",
          ],
        },
        {
          name: "Swasti Singh",
          role: "Rourkela's Cycling Star",
          bio: [
            "Swasti Singh, a 23-year-old cyclist from Rourkela, Odisha, is one of India's most promising talents in both road and track cycling.",
            "A national champion and Ekalabya Puraskar awardee, she has earned over 50 medals across various competitions. Swasti gained national attention by setting a new meet record in the 3 km individual pursuit at the 38th National Games in 2025.",
          ],
        },
        {
          name: "Manikanta Hoblidhar",
          role: "India's Sprint Sensation",
          bio: [
            "Manikanta Hoblidhar, a 21-year-old sprinter representing the Services team, has taken Indian athletics by storm.",
            "At the 2023 National Open Athletics Championships, he smashed the national 100m record by clocking an impressive 10.23s in the semifinals, breaking a seven-year-old mark. He went on to win the final in 10.42s.",
          ],
        },
      ],
    },
    {
      title: "Coaches & Institutions",
      entries: [
        {
          name: "Ram Bahadur Subba",
          role: "SSI Best Coach Awardee",
          bio: [
            "Ram Bahadur Subba, a dedicated coach from Sikkim, has been recognized for his outstanding contribution to grassroots sports development with the prestigious SSI Best Coach Award.",
            "Working under the District Youth Services & Sports Department, Subba has played a crucial role in nurturing young athletes, emphasizing sports science, training, and rehabilitation.",
          ],
        },
        {
          name: "Odisha Mining Corporation",
          role: "SSI Sports Development Awardee",
          bio: [
            "Odisha Mining Corporation (OMC) was honored with the SSI Sports Development Award at the Sports Science India Conclave held at Kalinga Stadium, Bhubaneswar, in December 2023.",
            "This recognition celebrates OMC's significant contributions to sports development in Odisha through its corporate social responsibility (CSR) initiatives.",
          ],
        },
        {
          name: "Ardor Football Academy",
          role: "Transforming Grassroots Football",
          bio: [
            "Ardor Football Academy (AFA), established in 2012, is a leading grassroots football institution based in Bhubaneswar and Delhi.",
            "Focused on the motto \"Football for All\", the academy provides free training to over 300 underprivileged children across multiple community centers, including slums and government schools in Odisha.",
          ],
        },
      ],
    },
    {
      title: "Teams & Legends",
      entries: [
        {
          name: "Odisha Women's Football Team",
          role: "National Pioneers",
          bio: [
            "The Odisha women's football team is one of the leading state teams in India, known for its strong presence in national tournaments like the Senior Women's National Football Championship and the Indian Women's League.",
            "Managed by the Football Association of Odisha and based at the Kalinga Stadium in Bhubaneswar, the team has a history of producing talented players and achieving significant success.",
          ],
        },
        {
          name: "Brahmanand Sankhwalkar",
          role: "Legendary Goalkeeper",
          bio: [
            "Brahmanand Sankhwalkar, born on March 6, 1954, in Taleigao, Goa, is one of India's most iconic footballers and a legendary goalkeeper.",
            "He made his international debut in 1976 and captained the Indian national team from 1983 to 1986. At the club level, he spent 17 successful seasons with Salgaocar FC, leading them to several titles.",
          ],
        },
        {
          name: "Dilip Tirkey",
          role: "Indian Hockey Icon",
          bio: [
            "Dilip Tirkey, born on November 25, 1977, in Sundargarh, Odisha, is a legendary Indian field hockey player and the current President of Hockey India.",
            "Renowned for his rock-solid defense and often called \"The Wall\", he holds the record for the most international appearances by an Indian with 412 caps. A three-time Olympian, he captained India at major tournaments.",
          ],
        },
      ],
    },
  ],
  quote:
    "At the SSI Sports Awards 2023, we celebrate the heroes behind the headlines — the athletes, coaches, and institutions who inspire us to dream bigger, run faster, and aim higher.",
};

export const teamsWeServe = [
  "Indian Ice Hockey",
  "India U-16/19 Football",
  "Ranji Cricket Team",
  "SAI Table Tennis",
  "Naval Tata Hockey",
  "Weightlifting Associations",
  "Wrestling Association",
  "Local Sports Clubs",
];

export const services = [
  { name: "Sports Medicine", detail: "Specialized care for athletes" },
  { name: "Sports Surgery", detail: "Advanced surgical solutions" },
  { name: "Physiotherapy", detail: "Rehabilitation & recovery" },
  { name: "Sports Psychology", detail: "Mental conditioning" },
  { name: "Sports Nutrition", detail: "Performance diet planning" },
];

export const founders = [
  { name: "Dr. Sarthak Patnaik", role: "Sports Medicine Specialist" },
  { name: "Mr. Soumya Patnaik", role: "Sports Management Expert" },
];

export const teamMembers = [
  { name: "Mr. Soumya Patnaik", role: "Director and Founder" },
  { name: "Dr. Sarthak Patnaik", role: "Director and CEO" },
  { name: "Dr. Nisha Kaushik", role: "Managing Director" },
  { name: "Dr. Monika Ray Patnaik", role: "Co-Founder" },
  { name: "Leepika Patnaik", role: "Founding Member, Marketing Manager" },
  { name: "Akul Nayak", role: "Operations Manager" },
];

export const juryMembers = [
  {
    name: "Dr. Prabodh Mohanty",
    role: "Managing Director, SNM Group",
    bio: "An accomplished business leader with extensive experience in corporate governance and strategic management across diverse industries.",
  },
  {
    name: "Dilip Kumar Tirkey",
    role: "Former Captain, Indian Hockey",
    bio: "Legendary hockey player and former captain of the Indian national team with numerous international accolades and a distinguished sports career.",
  },
  {
    name: "U. Vimal Kumar",
    role: "Former Indian Badminton Champion & Coach",
    bio: "Former Indian badminton champion and renowned coach. Co-founder of the Prakash Padukone Badminton Academy, he has trained stars like Saina Nehwal and Lakshya Sen and received the Dronacharya Award in 2019.",
  },
  {
    name: "Rajaraman",
    role: "Eminent Sports Journalist",
    bio: "A man who has seen the growth of Indian sports and its stars in close quarters gives interesting anecdotes and life lessons through the lens of this much-acclaimed journalist. Raj is among a handful of sports communication professionals with diverse multimedia experience — daily newspapers, wire service, weekly magazine, news TV channel, websites, sports organizations — over the past 37 years.",
  },
  {
    name: "Pritveen Rajan",
    role: "Sports Strategist",
    bio: "Expert in sports management and strategy with a proven track record of developing talent and implementing successful sports programs.",
  },
];

export const distinguishedGuests = [
  { name: "Shri Kanak Vardhan Singh Deo", role: "Chief Guest", detail: "Honourable Deputy Chief Minister, Odisha" },
  { name: "Shri Dilip Kumar Tirkey", role: "Guest of Honour", detail: "Renowned Hockey Legend & Former Indian Captain" },
  { name: "Shri Probodh Mohanty", role: "Special Guest", detail: "Managing Director of SNM Group" },
  { name: "Shri Akash Das Nayak", role: "Special Guest", detail: "Odia Film Actor & MLA" },
  { name: "Dr. Sarthak Patnaik", role: "Founder & CEO", detail: "Sports Science India" },
];

export const awardeeVoices = [
  { name: "Pranati Nayak", role: "Indian Olympic Athlete" },
  { name: "Karnam Malleswari", role: "Indian Weightlifter" },
];

export type MediaArticle = {
  source: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
};

export const mediaArticles: MediaArticle[] = [
  {
    source: "The New Indian Express",
    title: "Female athletes eight times more prone to injuries: Experts",
    description:
      "Experts at the International Arthroscopy Conference revealed groundbreaking data about injury patterns in female athletes compared to their male counterparts.",
    date: "July 21, 2024",
    tags: ["National", "English"],
    image: "/images/imported/Screenshot-14.png",
  },
  {
    source: "Times of India",
    title: "Kalinga Stadium to host sports science conclave on Saturday",
    description:
      "Bhubaneswar's iconic Kalinga Stadium is set to host a first-of-its-kind sports science conclave, bringing together experts from across the country.",
    date: "December 15, 2023",
    tags: ["National", "English"],
    image: "/images/imported/Screenshot-15.png",
  },
  {
    source: "Sambad English",
    title: "Odisha's first sports science conclave held; SSI sports awards given away",
    description:
      "The first sports science conclave in Odisha concluded successfully with the presentation of SSI sports awards to outstanding athletes and contributors.",
    date: "December 17, 2023",
    tags: ["Regional", "English"],
    image: "/images/imported/Screenshot-16.png",
  },
];

export const mediaVideos = [
  {
    title: "SSI Sports Awards 2023 Highlights",
    description: "Watch the highlights from the prestigious SSI Sports Awards ceremony held at Kalinga Stadium.",
    date: "December 16, 2023",
  },
  {
    title: "Sports Science Conclave Sessions",
    description: "Key sessions and discussions from the Sports Science Conclave featuring industry experts.",
    date: "December 17, 2023",
  },
  {
    title: "Award Winners Interviews",
    description: "Exclusive interviews with the winners of SSI Sports Awards 2023 and their achievements.",
    date: "December 18, 2023",
  },
  {
    title: "Behind the Scenes: SSI Awards",
    description: "Go behind the scenes of the SSI Sports Awards 2023 and see how the event was organized.",
    date: "December 19, 2023",
  },
];

export type AwardCategory = {
  name: string;
  tagline: string;
  body: string[];
  eligibility?: string;
};

export const awardCategories: AwardCategory[] = [
  {
    name: "SSI Karna Award",
    tagline: "Outstanding individual performance",
    body: [
      "In the Indian mythological epic of Mahabharata, Karna was considered to be an extremely gifted warrior and an equal to Arjuna with the bow and arrow. Named after Karna, the award aims to honour the vigour and valour of a sportsman.",
      "Selection: The awardee is chosen by the editorial board of SSI Fanzine, the monthly newsletter of SSI.",
    ],
    eligibility:
      "Emerging player (U-25 or turned pro in last 3 years); medal or record in a national/international competition in 2024–25; open to all recognised sports disciplines.",
  },
  {
    name: "Milkha Singh Sprint Champion",
    tagline: "Excellence in sprinting",
    body: [
      "Independent India's first individual sports star, the late great Milkha Singh dominated Indian track and field for over a decade with his speed and spirit. He is the only athlete to win gold at 400 metres at the Asian Games as well as the Commonwealth Games.",
      "He also won gold medals in the 1958 and 1962 Asian Games. He represented India in the 1956 Summer Olympics in Melbourne, the 1960 Summer Olympics in Rome and the 1964 Summer Olympics in Tokyo. Padma Shri Milkha Singh, also known as \"The Flying Sikh\", was introduced to the sport while serving in the Indian Army.",
      "Purpose: The award named after him has been instituted to honour sportspersons (male) from the Services every year.",
    ],
  },
  {
    name: "Dilip Tirkey Hockey Player",
    tagline: "Excellence in hockey",
    body: [
      "Padma Shri Dilip Tirkey stands as an icon in Indian hockey, a testament to skill, resilience, and dedication. The first and only Indian hockey player to compete in over 400 international matches, Tirkey represented India with unmatched discipline and tactical brilliance.",
      "His journey includes participation in three Olympic Games (1996, 2000, and 2004), where his steadfast defense and leadership earned him widespread acclaim. As captain, Tirkey led India to a historic victory at the 2003 Afro-Asian Games, where India clinched gold against arch-rival Pakistan.",
      "Beyond his illustrious playing career, Tirkey has continued to serve Indian hockey through dedicated efforts at the grassroots level, particularly in his home state of Odisha. He has initiated several programs aimed at discovering and nurturing young talent in under-resourced communities, especially in tribal regions.",
      "In addition to serving as the chairman of the Odisha Hockey Promotion Council, Tirkey currently leads Hockey India as its President, where he actively collaborates with state and national bodies to promote the sport among youth nationwide.",
    ],
  },
  {
    name: "Paika Team Award",
    tagline: "Outstanding team performance",
    body: [
      "The Paikas were peasant militias of the Gajapati rulers of Odisha. Led by Buxi Jagabandhu, they revolted against the British exploitation of Indian mass. Paika Rebellion was an armed revolt against British colonial rule in India that occurred in 1817 in Odisha. It was one of the earliest rebellions against the British.",
      "So, this award is a tribute to the fearlessness showcased by the Paikas as a community. That's why it is a team award.",
    ],
  },
  {
    name: "SSI Female Sprint Champion",
    tagline: "Outstanding female sprinters",
    body: [
      "Sprinting is an ancient form of athletics, dating back to the 7th century BC. From being the first event at the ancient Olympic Games of about 192 meters—called the 'Stadium race'—to the inclusion of the first 100 m race in the first modern Olympics in Athens, Greece, in 1896—it has evolved over the years but with the core principle of covering the distance in shortest time possible remaining intact.",
      "It is a sport that embodies raw speed, power, and precision. SSI has been actively promoting the sport since its inception and has a dedicated academy for sprinters. Thus, this award born out of SSI's commitment towards boosting the sprint culture in India. It honours female sprinters who demonstrate exceptional skill at the national and international level.",
    ],
  },
  {
    name: "SSI Lifetime Achievement",
    tagline: "Enduring contributions to sports",
    body: [
      "Trophies may gather dust, but memories stay. These memories are also the motivation for future tournaments and championships. SSI takes the pride in reviving the memories of sports glory and hence, this award. Sports legends can retire, but their spirit never fades. We pay our tribute to their spirit.",
    ],
  },
  {
    name: "SSI Emerging Player",
    tagline: "Promising young talent",
    body: [
      "When talent blooms somewhere someday, it's also the society's responsibility to encourage it to grow and flower. As part of our social responsibility, we have instituted this award to encourage our upcoming stars. We stand by them, in victory or defeat!",
    ],
  },
  {
    name: "SSI Grassroots Coach",
    tagline: "Grassroots coaching excellence",
    body: [
      "Despite facing challenges posed by limited resources and sometimes inadequate infrastructure, grassroots coaches play a crucial role in shaping the foundation of sports. Their dedication, resourcefulness, and passion for developing young athletes often fill the gap left by these challenges.",
      "Grassroots coaches strive to instill discipline, resilience, and essential skills in their athletes, forming a solid base for future excellence. Their relentless commitment not only nurtures talent but also fosters a love for the sport, providing opportunities for athletes to shine at higher levels. The SSI Grassroot Coach Award celebrates this unwavering commitment to nurturing India's budding sports stars.",
    ],
  },
  {
    name: "SSI Best Coach",
    tagline: "Excellence in coaching",
    body: [
      "Coaches are the unsung heroes of the sporting world. They lay the foundation for victories. Coaches not only impart the skills and knowledge to play a certain sport, but they are also mentors, role models, teachers, confidants, and even friends.",
      "Coaching leadership is an important part of athlete development and sports development in general. However, their efforts often go unnoticed. Not many awards in India are instituted for the coaches. So, SSI breaks the stereotype and has dedicated this award exclusively for the trainers and coaches.",
    ],
    eligibility:
      "Trained athletes who competed at national/international level; key role in developing world-class athletes; contributions to sports-science-based training are an advantage.",
  },
  {
    name: "SSI Sports Development",
    tagline: "Advancing sports in India",
    body: [
      "This award has been instituted to honour dedicated efforts towards sports development and promotion by organizations, associations or any individual. We value the steps taken towards working meticulously for the development and betterment of sports in the country.",
      "The award also recognizes the efforts of sports promotion at the grassroot to elite levels. It honours efforts taken towards providing training solutions to players, organizing events in India which match international standards and building infrastructure to promote sports in all the sectors.",
    ],
  },
  {
    name: "SSI Sports Journalism",
    tagline: "Excellence in sports reporting",
    body: [
      "It's a common adage that the 'pen is mightier than the sword.' And, SSI believes it to the core. Thus, SSI Journalism Award is for those awe-inspiring write-ups, articles, news reports and columns on sports and sports personalities that are out-of-the-box and have had impact on society.",
      "SSI recognises the remarkable contribution of sports journalists towards shaping up a sports culture in the country. They are the voice for sports and athletes. This award is dedicated to such contributions.",
    ],
  },
  {
    name: "Best National Federation",
    tagline: "Excellence in sports administration",
    body: [
      "This award honors a federation's remarkable contributions towards the development, promotion, and success of sports in India. This prestigious award highlights innovative practices, exemplary governance, and impactful programs that have elevated sports standards in the country.",
    ],
  },
  {
    name: "SSI Shakti Singh Throwers",
    tagline: "Promising throwers",
    body: [
      "Recognises promising young athletes in throwing disciplines (shot put, discus, javelin, hammer).",
      "\"Throwing events require strength, technique, and precision. This award aims to identify the next generation of Indian throwers.\"",
    ],
    eligibility:
      "Under 23 years of age; participated in national-level competitions in throwing events; demonstrated potential for growth and excellence.",
  },
];

export const nominationSubCategories = [
  "Athletics",
  "Gymnastics",
  "Swimming",
  "Jump",
  "Throw",
  "Rally",
  "Racing",
  "Boxing",
  "Weightlifting",
  "Wrestling",
  "Cycling",
  "Badminton",
];

export const contact = {
  organisation: "Sports Science India",
  address: "Plot No - A17/1A, Surya Nagar, In front of S.P Vigilance Office, Bhubaneswar - 751003",
  phones: ["+91-7381380010", "+91-7847922850"],
  email: "sportscienceindia@gmail.com",
};
