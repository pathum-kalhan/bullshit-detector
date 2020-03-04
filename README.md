# Bullshit detector - The sinhala profanity filter :sunglasses: :shit:
Profanity filter for sinhala language.


* Promise based.
* Zero dependency.

## Usage

```
processTxt('fuck you son of bitch').then((data) => {
    console.log(data);
  });
  ```
  Output 
  
```
{
  badWordsContain: [ 'fuck', 'bitch' ],
  hasBadWords: true,
  starTxt: '**** you son of *****'
}
```

Feel free to request features or contribute to the code.
