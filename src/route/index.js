// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior FullStack JS Developer',
  salary: '600$ в місяць',
  address: 'Kyiv, Ukraine',
}

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },
    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good teamplayer, every colleague is a friend to me.',
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },
    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 8,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 8,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 7,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Football',
          isMain: false,
        },
        {
          name: 'Volleyball',
          isMain: true,
        },
        {
          name: 'Chess',
          isMain: false,
        },
        {
          name: 'Paintbell',
          isMain: false,
        },
        {
          name: 'Backetball',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },
    header,

    main: {
      educations: [
        {
          name: 'school',
          isEnd: true,
        },
        {
          name: 'uni',
          isEnd: false,
        },
        {
          name: 'university',
          isEnd: true,
        },
        {
          name: 'cources',
          isEnd: true,
        },
      ],
      certificates: [
        {
          name: 'first',
          id: 1,
        },
        {
          name: 'second',
          id: 2,
        },
        {
          name: 'third',
          id: 3,
        },
        {
          name: 'fourth',
          id: 4,
        },
        {
          name: 'fifth',
          id: 5,
        },
      ],
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },
    layout: 'big',
    header,

    main: {
      works: [
        {
          position: 'Junior Fuul-Stack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://www.it-brains.com.ua/march_16/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://www.it-brains.com.ua',
              about:
                'Airbnb competitor. High-level application for searching apartmants',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              stackAmount: 3,
              awards: [
                {
                  name: 'Background verification - is not a feature thet prove that thy are persons',
                },
                {
                  name: 'Preparing pages - is not a feature thet prove that thy are persons',
                },
              ],
              awardAmount: 2,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
