import { createSlice } from "@reduxjs/toolkit";
import book1 from "../assets/book-1.jpg";
import book2 from "../assets/book-2.jpg";
import book3 from "../assets/book-3.jpg";
import book4 from "../assets/book-4.jpg";
import book5 from "../assets/book-5.jpg";
import book6 from "../assets/book-6.jpg";
import book7 from "../assets/book-7.jpg";
import book8 from "../assets/book-8.jpg";
import book9 from "../assets/book-9.jpg";
import book10 from "../assets/book-10.jpg";
import book11 from "../assets/book-11.jpg";
import book12 from "../assets/book-12.jpg";
import book13 from "../assets/book-13.jpg";
import book14 from "../assets/book-14.jpg";
import book15 from "../assets/book-15.jpg";
// Author image
import author1 from "../assets/riyan.jpg"
import author2 from "../assets/pisti.jpg"
import author3 from "../assets/ariona.jpg"
import author4  from "../assets/banhi.jpg"
import author5  from "../assets/Jayadev.jpg"

import author6 from "../assets/suman.jpg"
import author7 from "../assets/sonam.jpg"
import author8 from "../assets/zisika.jpg"

import author9 from "../assets/priyanka.jpg"
import author10 from "../assets/punam.jpg"
import author11 from "../assets/samita.jpg"
import author12 from "../assets/saijya.jpg"
import author13 from "../assets/moumakal.jpg"
import author14 from "../assets/simran.jpg"

const initialState = {
  items: [
    {
      id: "1",
      title: "GANG",
      author: "RYAN",
      authorImage:author1,
      Genre: "Crime / Thriller",
      Language: "English",
       Format: "Paperback / eBook",
     publisher: "Pisti Book Publication",
       PublicationYear: "2025",

      description: "Gang dives into the gritty underworld of power, betrayal, and survival. A bold female lead takes on enemies and secrets in a world where trust can cost your life..",
      image: book1,
      price:249
    },
    {
      id: "2",
      title: "Deity",
      author: " Pisti",
      authorImage:author2,
      Language: "English",
      Format: "Paperback / eBook",
      Publisher: "Pisti Book Publication",
      PublicationYear: "2025",

      description: "Deity explores the divine feminine through a story rooted in tradition, transformation, and empowerment. Blending myth and reality, it unveils the spiritual strength hidden in everyday life.",
      image: book2,
      price: 499
    },
    {
      id: "3",
      title: "Venus",
      author: "Ariona",
      authorImage:author3,
      Genre: "Sci-Fi / Romance",
      Language: "English",
      Format: "Paperback / eBook",
      Publisher: "Pisti Book Publication",
      PublicationYear: "2025",

      description: "Venus takes you on a poetic and mysterious voyage to a new world, blending science fiction with deep emotional discovery. A tale of passion, longing, and cosmic wonder.",
      image: book3,
      price:490
    },
    {
      id: "4",
      title: "The Flawless Beauty",
      author: "Banhi Balaya",
      authorImage:author4,
      Genre: "Poetry / Emotional Fiction",
      Language: "English",
      Format: "Paperback / eBook",
Publisher: "Pisti Book Publication",
PublicationYear: "2025",

      description: "A magical fable about following your dreams and listening to your heart.",
      image: book4,
      price:429
    },
    {
      id: "5",
      title: "Devils Eyes",
      author: "Jaydev Nayak",
      authorImage:author5,
      Genre: "Horror / Thriller / Mystery",
Language: "English",
Format: "Paperback / eBook",
Publisher: "pisti book publication",
PublicationYear: "2025",

      description: "Devils Eyes delves into the chilling depths of human fear and supernatural horror. With an intense gaze that haunts the soul, this story unfolds dark secrets, unrelenting evil, and a battle between reality and the unknown. A gripping narrative perfect for fans of psychological thrillers and horror fiction..",
      image: book5,
      price:329
    },
    {
      id: "6",
      title: " I Am Not an Object",
      author: "Suman Subhadarshani",
      authorImage:author6,
      Genre: "Empowerment / Feminism / Social Awareness",
Language: "English",
Format: "Paperback / eBook",
Tagline: "You'll Get There",
Theme: "Strong. Independent. Worthy of respect.",
Publisher: "pisti book publication",
PublicationYear: "2025",
description: "I Am Not an Object is a powerful declaration of identity, strength, and self-worth. It speaks to every individual fighting to be seen beyond societal labels, especially women striving for dignity and independence. The book is a call to recognize and celebrate inner strength, while breaking free from objectification and stereotypes.",
      image: book6,
      price : 269

    },
    {
      id: "7",
      title: "Game of Your Mind",
      author: "Sonam Priyadarshani",
      authorImage:author7,
      Genre: "Self-help / Psychology / Personal Development",
Language: "English",
Format: "Paperback / eBook",
Publisher: "pisti book pu blication",
PublicationYear: "2025",

      description: "Game of Your Mind is a thought-provoking guide that explores the power of the human mind. It encourages readers to understand, control, and transform their thought patterns for personal growth, emotional resilience, and mental clarity.",
      image: book7,
      price : 299
    },
    {
      id: "8",
      title: "The Freedom",
      author: "Zisika",
      authorImage:author8,
      Genre: "Inspirational / Personal Growth",
Language: "English",
Format: "Paperback / eBook",
Publisher: "Pisti Book Publication",
PublicationYear: "2025",
      description: "An inspiring book about women, work, and the will to lead.",
      image: book8,
      price: 440

    },
    {
      id: "9",
      title: "Battle",
      author: "Priyanka Tiadi",
      authorImage:author9,
      Genre: "Historical Fiction / Drama",
     Language: "English",
    Format: "Paperback / eBook",
     Publisher: "Pisti Book Publication",
    PublicationYear: "2025",

      description: "An inspiring book about women, work, and the will to lead.",
      image: book9,
      price:330
    },
    {
      id: "10",
      title: " Gayab",
      author: "Punam",
      authorImage:author10,
      Genre: "Horror / Mystery",
     Tagline: "Bhangarh’s haunted secrets revealed",
     Language: "English",
     Format: "Paperback / eBook",
     Publisher: "Pisti Book Publication",
    PublicationYear: "2025",
    description: "Gayab is a chilling journey into the mysterious legends of Bhangarh. As secrets unravel, the line between the seen and the unseen blurs in this haunting tale.",
    image: book10,
    price: 320

    },
    {
      id: "11",
      title: "Housewife",
      author: "Samita",
      authorImage:author11,
      Genre: "Contemporary Fiction / Social Drama",
Language: "English",
Format: "Paperback / eBook",
Publisher: "Pisti Book Publication",
PublicationYear: "2025",

      description: "An inspiring book about women, work, and the will to lead.",
      image: book11,
      price: 499

    },
    {
      id: "12",
      title: "Alone but Not Broken",
      author: "Saijya Begam",
      authorImage:author12,
      Genre: "Inspirational / Drama / Personal Journey",
Language: "English",
Format: "Paperback / eBook",
Publisher: "Pisti Book Publication",
PublicationYear: "2025",

      description: "Alone but Not Broken tells the powerful story of a girl who lost everything but discovered her inner strength. A moving narrative of resilience, recovery, and empowerment.",
      image: book12,
      price: 499

    },
    {
      id: "13",
      title: "FAIRY TALES",
      author: "Moumakal",
      authorImage:author13,
      Genre: "Fantasy / Fairy Tales / Fiction",
Language: "English",
Format: "Paperback / eBook",
Publisher: "Pisti Book Publication",
PublicationYear: "2025",

      description: "Fairy Tales is a captivating collection of magical stories that transport readers to enchanted lands filled with mystery, wonder, and imagination. A national bestseller by the award-winning writer Moumakal.",
      image: book13,
      price: 350

    },
    {
      id: "14",
      title: "MY LITTLE SECRET",
      author: "Simran",
      authorImage:author14,
      Genre: "Romance / Drama / Psychological Fiction",
Language: "English",
Format: "Paperback / eBook",
Publisher: "Pisti Book Publication",
PublicationYear: "2025",

      description: "My Little Secret delves into the hidden truths behind a seemingly perfect life. With emotional depth and suspenseful storytelling, Simran unravels love, betrayal, and the complexities of identity.",
      image: book14,
      price: 479

    },
    {
      id: "15",
      title: "The Flawless Beauty",
      author: "Banhi Balaya",
      authorImage:author4,
      Genre: "Poetry / Emotional Fiction",
      Language: "English",
      Format: "Paperback / eBook",
      Publisher: "Pisti Book Publication",
      PublicationYear: "2025",

      description: "An inspiring book about women, work, and the will to lead.",
      image: book15,
      price:399,
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default booksSlice.reducer;
