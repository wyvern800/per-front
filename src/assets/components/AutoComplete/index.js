import React, { Component } from 'react'
import {render} from 'react-dom'
import Downshift from 'downshift'

const items = ['apple', 'pear', 'orange', 'grape', 'banana']

class AutoComplete extends Component {
    render(
      return (
      <Downshift
        onChange={selection => alert(`You selected ${selection}`)}
        render={({
          getInputProps,
          getItemProps,
          getLabelProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }) => (
          <div>
            <label {...getLabelProps()}>Enter a fruit</label>
            <input {...getInputProps()} />
            {isOpen ? (
              <div>
                {items
                  .filter(i => !inputValue || i.includes(inputValue))
                  .map((item, index) => (
                    <div
                      {...getItemProps({
                        key: item,
                        index,
                        item,
                        style: {
                          backgroundColor: highlightedIndex === index
                            ? 'lightgray'
                            : 'white',
                          fontWeight: selectedItem === item
                            ? 'bold'
                            : 'normal',
                        },
                      })}
                    >
                      {item}
                    </div>
                  ))}
              </div>
            ) : null}
          </div>
        )}
      />,
      document.getElementById('root'),
     )
  );
}

export default AutoComplete