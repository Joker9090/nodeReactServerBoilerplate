import React from 'react';
import { renderToString } from 'react-dom/server';

import path from 'path';

const main = path.join(__dirname + '/../../public/index');

function checkValidation(req, res, next){
  return true;
}

export default {
  indexView: (req, res, next) => {
    if(checkValidation(req, res, next)){
      var initialState = {
        items: [
          'document your code',
          'drop the kids oasdassssdasdff at the pool'
        ],
        text: ''
      };
      res.render('index', { state: initialState, containerId: "content" });
    }
  }

};
