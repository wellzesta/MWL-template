// app/dev/model.js

/*

This establishes a data_type named dev in ember-data

You can populate this data_type using a data store, 
typically an api or using a fixture like mirage

Here, mirage in /app/mirage/config.js is acting like an 
http proxy and injecting data into the data_type dev

Note: mirage looks for plural form of the model `/devs`

In your router, you access dev using 

```
this.store.findAll('dev')
```

*/

import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr()
});
