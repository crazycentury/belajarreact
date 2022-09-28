import React, {useState} from 'react';
import GetList from './GetList';
import DialogInput from './DialogInput';
import { 
    List,
    TextField,
 } from '@mui/material';

const SearchList = (props) => {
    const {list, setList} = props;
    const [open, setOpen] = React.useState(false);
    // const [list, setList] = useState([])
    const [title, setTitle] = useState("")
    const [data, setData] = useState([
    {
      name: "",
      address: "",
      hobby: ""
    }
  ]);
  console.log(list);
  return (
    <div>
        <div 
      style={{
        width: '100%',
        height: '100px',
        marginLeft: '20px',
        borderRadius: '30px',
      }}>
      <TextField
        sx={{
          marginLeft: '20px',
          marginTop: '20px',
          width: '250px',
          borderRadius: '30px',
          flexGrow: 0,
          alignItems: 'left',
        }}
          id="filled-search"
          label="Search"
          type="search"
          alignSelft="left"
          value={title} onChange={e => setTitle(e.target.value)}
        />
      </div>
      {/* <DialogInput open={open} setOpen={setOpen} data={data} list={list} setList={setList}/> */}
      <List>
      {
          list.map((el, index) => {
            if (el.name.includes(title) || el.address.includes(title) || el.hobby.includes(title)) return <GetList list={list} setList={setList} index={index} key={index} data={el}/>
          })
        }
      </List>
      
    </div>
  )
}

export default SearchList
