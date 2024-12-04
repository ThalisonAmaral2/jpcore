# JP-Core API

It servers an Array of Words in JSON Object format

Each object have the following parameters


- **Object.word**: Provides the Kanji form, 
```js
word: "見る" // Miru 
```
- **Object.kana**: Provides the Kana form
```js
ex: "みる" // Miru
```

- **Object.translation**: Provides a list of translations to english
```js
translation: ["see","look at"]
```
- **Object.partOfSpeech**: Provides the part of speech of the word
```js
partOfSpeech: "Verb"
```

- **Object.sentences**: Provides a list of example sentences using that word.
```js
sentences: [
      {
        "text": "日曜日は図書館に行きます。",
        "kana": "にちようび は としょかん に いきます。",
        "translation": "I go to the library on Sundays."
      },
      {
        "text": "私は夏休みにプールに行った。",
        "kana": "わたし は なつやすみ に プール に いった。",
        "translation": "I went to the pool during summer vacation."
      }
    ]
```


## Methods

#### GET 1000 Words
```JS
GET /api/jpcore1000
```

### Pagination

#### GET 100 words
```js
GET /api/jpcore1000?page=1
```


## Upcoming...


In future, this is going to serve 6000 words, divided into 6 routes.


```js
GET /api/jpcore2000
GET /api/jpcore3000
...
GET /api/jpcore6000
```
