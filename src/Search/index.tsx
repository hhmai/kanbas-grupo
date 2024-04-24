import React, { useState } from 'react';
import $ from 'jquery';
var service_url = 'https://kgsearch.googleapis.com/v1/entities:search';
var params = {
    'query': 'Dune',
    'limit': 10,
    'indent': true,
    'key': 'AIzaSyDTxvy6q35Gl4Al8flW8u6Jfp691xBReXQ',
};
// $.getJSON(service_url + '?callback=?', params, function (response) {
//     $.each(response.itemListElement, function (i, element) {
//         $('<div>', {text:element['result']['name']}).appendTo(document.body);
//     });
// });
const findMovie = async () => {
    $.getJSON(service_url + '?callback=?', params, function (response) {
        $.each(response.itemListElement, function (i, element) {
            $('<h4>', { text: element['result']['name'] }).appendTo(document.body);
            try {
                $('<p>', { text: element['result']['detailedDescription']['articleBody'] }).appendTo(document.body);
            } catch (e) {
                console.log("can't read", e)
            }
            // $('<p>', {text:element['result']['detailedDescription']['articleBody']}).appendTo(document.body);
        });
    });
};

export default function Search() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
        params.query = inputValue;
        //   console.log(params.query)
    };
    return (
        <>
            <div>
                <h1> Search for A Movie</h1>
                <input style={{ width: "800px" }} placeholder="Search for Reviews" value={inputValue} onChange={handleChange} />
                <button style={{ backgroundColor: "black", color: "white" }} onClick={findMovie}>Search</button>
                <hr></hr>

            </div>
        </>
    );
}

