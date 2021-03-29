function birthdays(birthdate) {
    const date1     = new Date(birthdate);
    const date2     = new Date(Date.now());
    const diffTime  = Math.abs(date2 - date1);
    const age       = Math.floor(diffTime / 31556952000.00043);
    return age;
};

exports.liverpools = [
    {
        playerNo        : '01',
        playerName      : 'Allison Becker',
        age             : birthdays("10/2/1992"),
        position        : 'Goalkeeper', 
        nationalTeam    : "Brazil",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p116535.png",
    },
    {
        playerNo        : '13',
        playerName      : 'Adrian Castillo',     
        age             : birthdays("1/3/1987"),
        position        : 'Goalkeeper', 
        nationalTeam    : "Spain",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p60706.png"
    },
    {
        playerNo        : '62',
        playerName      : 'Caoimhin Kelleher',   
        age             : birthdays("11/23/1998"),
        position        : 'Goalkeeper', 
        nationalTeam    : "Ireland",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p200720.png"
    },
    {
        playerNo        : "12",
        playerName      : 'Marcelo Pitaluga',   
        age             : birthdays("12/20/2002"), 
        position        : 'Goalkeeper', 
        nationalTeam    : "Brazil",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/Photo-Missing.png"
    },
    {
        playerNo        : "04",
        playerName      : 'Virgil Van Dijk',   
        age             : birthdays("7/8/1991"),
        position        : 'Centre-Back / Defender', 
        nationalTeam    : "Netherlands",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png"
    },
    {
        playerNo        : "12",
        playerName      : 'Joe Gomez',   
        age             : birthdays("5/23/1997"),
        position        : 'Defender', 
        nationalTeam    : "England",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png"
    },
    {
        playerNo        : "19",
        playerName      : 'Ozan Kabak',   
        age             : birthdays("3/25/2000"),
        position        : 'Centre-Back / Defender', 
        nationalTeam    : "Turkey",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p438277.png"
    },
    {
        playerNo        : "21",
        playerName      : 'Konstantinos Tsimikas',   
        age             : birthdays("05/12/1996"),
        position        : 'Left-Back / Defender', 
        nationalTeam    : "Greece",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p214285.png"
    },
    {
        playerNo        : "26",
        playerName      : 'Andy Robertson',   
        age             : birthdays("3/11/1994"),
        position        : 'Left-Back / Defender', 
        nationalTeam    : "Scotland",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p122798.png"
    },
    {
        playerNo        : "28",
        playerName      : 'Ben Davies',   
        age             : birthdays("8/11/1995"), 
        position        : 'Defender', 
        nationalTeam    : "England",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p152898.png"
    },
    {
        playerNo        : "32",
        playerName      : 'Joel Matip',   
        age             : birthdays("8/8/1991"), 
        position        : 'Centre-Back / Defender', 
        nationalTeam    : "Cameroon",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p60914.png"
    },
    {
        playerNo        : "46",
        playerName      : 'Rhys Williams',   
        age             : birthdays("02/03/2001"), 
        position        : 'Centre-Back / Defender', 
        nationalTeam    : "England",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p219937.png"
    },
    {
        playerNo        : "47",
        playerName      : 'Nathaniel Phillips',   
        age             : birthdays("3/21/1997"),
        position        : 'Centre-Back / Defender', 
        nationalTeam    : "England",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p197464.png"
    },
    {
        playerNo        : "66",
        playerName      : 'Trent Alexander-Arnold',   
        age             : birthdays("10/7/1998"),
        position        : 'Right-Back / Defender', 
        nationalTeam    : "England",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p169187.png"
    },
    {
        playerNo        : "76",
        playerName      : 'Neco Williams',   
        age             : birthdays("4/13/2001"),
        position        : 'Right-Back / Defender', 
        nationalTeam    : "Wales",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p215136.png"
    },
    {
        playerNo        : "3",
        playerName      : 'Fabio Tavares (Fabinho)',   
        age             : birthdays("10/23/1993"), 
        position        : 'Defensive Midfielder', 
        nationalTeam    : "Brazil",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p116643.png"
    },
    {
        playerNo        : "5",
        playerName      : 'Georginio Wijnaldum',   
        age             : birthdays("11/11/1990"),
        position        : 'Midfielder', 
        nationalTeam    : "Netherlands",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p41733.png"
    },
    {
        playerNo        : "6",
        playerName      : 'Thiago Alcantara',   
        age             : birthdays("4/11/1991"),
        position        : 'Central Midfielder', 
        nationalTeam    : "Spain",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p61558.png"
    },
    {
        playerNo        : "7",
        playerName      : 'James Milner',   
        age             : birthdays("1/4/1986"),
        position        : 'Midfielder', 
        nationalTeam    : "England",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p15157.png"
    },
    {
        playerNo        : "8",
        playerName      : 'Naby Keita',   
        age             : birthdays("2/10/1995"),
        position        : 'Central Midfielder', 
        nationalTeam    : "Guinea",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p175592.png"
    },
    {
        playerNo        : "14",
        playerName      : 'Jordan Henderson',   
        age             : birthdays("06/17/1990"),
        position        : 'Midfielder', 
        nationalTeam    : "England",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p56979.png"
    },
    {
        playerNo        : "15",
        playerName      : 'Alexander Oxlade-Chamberlain',   
        age             : birthdays("8/15/1993"), 
        position        : 'Midfielder', 
        nationalTeam    : "England",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p81880.png"
    },
    {
        playerNo        : "17",
        playerName      : 'Curtis Jones',   
        age             : birthdays("1/30/2001"),
        position        : 'Midfielder', 
        nationalTeam    : "England",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p206915.png"
    },
    {
        playerNo        : "23",
        playerName      : 'Xherdan Shaqiri',   
        age             : birthdays("10/10/1991"), 
        position        : 'Midfielder', 
        nationalTeam    : "Switzerland",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p68312.png"
    },
    {
        playerNo        : "58",
        playerName      : 'Ben Woodburn',   
        age             : birthdays("10/15/1999"),
        position        : 'Midfielder', 
        nationalTeam    : "Wales",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/Photo-Missing.png"
    },
    {
        playerNo        : "9",
        playerName      : 'Roberto Firmino',   
        age             : birthdays("10/2/1991"),
        position        : 'Forward / Attacking Midfielder', 
        nationalTeam    : "Brazil",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p92217.png"
    },
    {
        playerNo        : "10",
        playerName      : 'Sadio Mane',   
        age             : birthdays("4/10/1992"),
        position        : 'Forward / Winger', 
        nationalTeam    : "Senegal",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p110979.png"
    },
    {
        playerNo        : "11",
        playerName      : 'Mohamed Salah',   
        age             : birthdays("6/15/1992"),
        position        : 'Forward', 
        nationalTeam    : "Egypt",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png"
    },
    {
        playerNo        : "20",
        playerName      : 'Diogo Jota',   
        age             : birthdays("12/4/1996"),
        position        : 'Forward / Winger', 
        nationalTeam    : "Portugal",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p194634.png"
    },
    {
        playerNo        : "27",
        playerName      : 'Divock Origi',   
        age             : birthdays("4/18/1995"),
        position        : 'Forward', 
        nationalTeam    : "Belgium",
        img             : "https://resources.premierleague.com/premierleague/photos/players/110x140/p152760.png"
    },
];