
Usage example for the AutoComplete component:
 <AutoComplete url='http://jsonplaceholder.typicode.com/posts' onChange={(val)=>onChange(val)}/>

url is supposed to return array of objects. Each of those objects should have `title` key.
For example:

[
  {
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
  },
  {
    "title": "qui est esse"
  }
]

The titles will be used to suggest values.

The component returns entered value on any change as the parameter of onChange callback
Example of the callback usage is:

  const onChange = (val) => console.log('Input value', val)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

