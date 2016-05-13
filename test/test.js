'use strict';

const assert = require('assert');

describe('my feature', () => {
    it('work', () =>{
       assert.equal('A','a'); 
    });
    it('fails',() => {
        assert.throws(function(){
           throw 'Error!';
        });
    })
});

