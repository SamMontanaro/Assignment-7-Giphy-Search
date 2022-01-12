import React from 'react';
import axios from 'axios';

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: [],
        }
    }

    fetchGifs = async () => {
        let input = document.getElementById("gif").value;
        
        await axios
          .get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=4Uqlux8KuvAH0FneRmAkDpYXWZsLC8rm&rating=${document.getElementById("rating").value}`)
          .then(response => {
            this.state.gifs = response.data.data;
          })
        
        this.props.onSubmitSearch(this.state.gifs);
    }
    
    render() {
        return (
            <div className='d-flex flex-row justify-content-center align-items-center'>
                <div className='d-flex justify-content-center my-3'>
                    <select className="form-select w-50" id='rating'>
                        <option value="g">Rated G</option>
                        <option value="pg">Rated PG</option>
                        <option value="pg-13">Rated PG-13</option>
                    </select>
                    <input type="text" id="gif" className="form-control text-center"/>
                    <button type="submit" className='btn btn-warning px-3' onClick={this.fetchGifs}>Search</button>
                </div>
            </div>
        )
    }
}

export default SearchField;