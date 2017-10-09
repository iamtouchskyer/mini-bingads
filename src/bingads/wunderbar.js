import React from 'react';
import WunderbarPanel from './wunderbar-panel.js';
import SearchField from './components/search.js';
import Dropdown from './components/dropdown.js';

class Wunderbar extends React.Component {
    didSearch() {}
    render () {
        const list = [
            {name: "touchskyer00 - B0105ULF"}, {name: "touchskyer01 - B010E7GZ"}, {name: "touchskyer02 - G0105ULF"}, {name: "touchskyer03 - E310E7GZ"}, {name: "touchskyer04 - E0105ULF"}, 
            {name: "touchskyer00 - B0105ULF"}, {name: "touchskyer01 - B010E7GZ"}, {name: "touchskyer02 - G0105ULF"}, {name: "touchskyer03 - E310E7GZ"}, {name: "touchskyer04 - E0105ULF"}, 
            {name: "touchskyer00 - B0105ULF"}, {name: "touchskyer01 - B010E7GZ"}, {name: "touchskyer02 - G0105ULF"}, {name: "touchskyer03 - E310E7GZ"}, {name: "touchskyer04 - E0105ULF"}, 
            {name: "touchskyer05 - D010E7GZ"}, {name: "touchskyer06 - A010E7GZ"}, {name: "touchskyer06 - A010E7GZ"},
            {name: "touchskyer05 - D010E7GZ"}, {name: "touchskyer06 - A010E7GZ"}, {name: "touchskyer06 - A010E7GZ"},
            {name: "touchskyer05 - D010E7GZ"}, {name: "touchskyer06 - A010E7GZ"}, {name: "touchskyer06 - A010E7GZ"},
            {name: "touchskyer05 - D010E7GZ"}, {name: "touchskyer06 - A010E7GZ"}, {name: "touchskyer06 - A010E7GZ"},
            {name: "touchskyer05 - D010E7GZ"}, {name: "touchskyer06 - A010E7GZ"}, {name: "touchskyer06 - A010E7GZ"},
            {name: "touchskyer05 - D010E7GZ"}, {name: "touchskyer06 - A010E7GZ"}, {name: "touchskyer06 - A010E7GZ"},
        ];

        return (
            <div>
                <label>Selected Account</label>
                <Dropdown title="Selected Account" list={list} enableSearch={true} selectedIndex={0} />

                <hr />

                <SearchField onSearch={this.didSearch.bind(this)}/>
                <WunderbarPanel />
            </div>
        );
    }

}

export default Wunderbar;