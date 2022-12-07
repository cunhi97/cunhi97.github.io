'use strict'

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    numberOfVotes   : new Array(4).fill(0),
    registerNewAnswer() {
      
      const answer = Number(
        prompt(
          `${this.question}\n${this.options.join('\n')}\n(Write option number)`
        )
        
      );
      console.log(answer);
 
 typeof answer === 'number' &&
 answer < this.numberOfVotes.length &&
 this.numberOfVotes[answer]++;

this.displayResults();
this.displayResults('string');
},

displayResults(type = 'array') {
if (type === 'array') {
 console.log(this.numberOfVotes);
} else if (type === 'string') {
 
 console.log(`Poll results are ${this.numberOfVotes.join(', ')}`);
}
},

};

document
.querySelector('.poll')
.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ numberOfVotes: [5, 2, 3] }, 'string');
poll.displayResults.call({ numberOfVotes: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ numberOfVotes: [1, 5, 3, 9, 6, 1] });

if(poll.numberOfVotes > poll.numberOfVotes.length){
    alert('Câu trả lời không hợp lệ')
}

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]


