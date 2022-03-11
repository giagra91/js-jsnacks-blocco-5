const animals =    [
    { 
        nome: 'leone',
        famiglia: 'felidi', 
        classe: 'mammiferi' 
    },
    { 
        nome: 'cane', 
        famiglia: 'canidi', 
        classe: 'mammiferi' 
    },
    { 
        nome: 'gallina', 
        famiglia: 'fasianidi', 
        classe: 'uccelli' 
    },
    { 
        nome: 'gatto', 
        famiglia: 'felini', 
        classe: 'mammiferi' 
    },
    { 
        nome: 'orso', 
        famiglia: 'ursidae', 
        classe: 'mammiferi' 
    },
    ];
    
    const newAnimals = animals.filter (element => {
        if (element.classe == `mammiferi`)
        return true;
    });
    console.table(newAnimals)
    