import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const postCatItem = info =>
  request.post('/api/catitems')
    .send(info)
    .then(handleSuccess)
    .catch(handleError);



export const getCatItems = () =>
    request.get('/api/catitems')
      .then(handleSuccess)
      .catch(handleError);

export const deleteCatItem = info =>
    request.delete('/api/catitems')
      .send(info)
      .then(handleSuccess)
      .catch(handleError);

export const updateCatItem = info =>
    request.put('/api/catitems')
      .send(info)
      .then(handleSuccess)
      .catch(handleError);

