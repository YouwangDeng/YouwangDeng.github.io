---
layout: post
title:  "Use react-native-storage to cache data in app"
date:   2019-05-28 17:28:10 +0800
categories: [javascript, react native]
---
[react-native-storage](https://github.com/sunnylqm/react-native-storage) could be used to  cache data in react native.

**Data flow** in cache process:
1. init storage as global storage
```javascript
const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage, 
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {
  }
});
global.storage = storage;
```
2. write async method for data to be fetched
```javascript
storage.sync = {
    async keyExample(params) {
        const {
      syncParams: { extraFetchOptions, someFlag }
    } = params;
        // async fetch data here
        let res = await asyncFunc();
        if(res) {
            storage.save({
                key: 'keyExample',
                data: {
                    entryExample: res,
                },
                expires: 1000 * 3600,
            });
        }
        // to assure async consistency, should not return res here
        return {entryExample: res};
    }
}
```
3. load Data in expected place
```javascript
storage.load({
      key: 'keyExample',
      // if set to true, would return the old data before the sync process
      syncInBackground: false,
      syncParams: {
        extraFetchOptions: {
          // set fetch options here
        },
        someFlag: true, // some flag to be used
      },
    }).then(ret => {
        // if data was found in the storage and data was not expired, then just return the data without execute the async method
        // if data not found or expired, then run async method to fetch data and return the fetched data(when syncInbackground set to false)
        // deal with data here
        console.log(ret);
    })
    .catch(err => {
        console.warn(err.message);
    });
```