import React from 'react'
import '../../Styles/Landingpage/NotesSearch.css';
import ReactGa from 'react-ga';
import { useState , useEffect} from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../_helpers/Constants';
import { 
  useQuery,
  useMutation,
  useQueryClient } from '@tanstack/react-query';

export default function PaperSearch() {
    const queryClient = useQueryClient();
    const [papers , setpapers]=useState([])
    const [counter,setcounter]=useState(0)

    const getdata = ()=>{
      ReactGa.event({
        category:'papers fetch',
        action:'Get papers',
        label:`subject - ${q2data.subject_name}`,
        value:{
          "program":q2data.programme_name,
           "semester":q2data.semester,
           "subject":q2data.subject_name,
         }
      })
        const datax = {
          "program":q2data.programme_name,
           "semester":q2data.semester,
           "subject":q2data.subject_name,
          
         }
         console.log(datax) 
         axios.post(`${API_URL}papers/`,datax).then((res)=>{
            setpapers(res.data.papers)
         })
      }
      useEffect(()=>{
        getdata()
    },[counter])

    const [ q2data , setq2data] = useState({
        programme_name:"",
        semester:"",
        subject_name:"",
        
    
     });

     const handleSubmit=(e)=>{
  
        console.log("in handle block!")
        e.preventDefault();
        const datax = {
         "program":q2data.programme_name,
          "semester":q2data.semester,
          "subject":q2data.subject_name,
         
        }
        setcounter(counter+1) 
      } 
      
       
        const handleInput = (e)=>{
          const data = e.target.value;
          const name = e.target.name;
          // console.log(data);
          setq2data({...q2data,[name]:data});
       }
        

  return (<>
         <h3 className="alignCentre">Search your papers here</h3>
      <div className="row">
        <div className="card search_notes_form m-2 col-lg-4 col-md-5 col-sm-12">
        <form onSubmit={handleSubmit}>
           <div class="form-group row">
          
           <h5>Programme name</h5>
           <select className="btn started_button dropdown-toggle col-6" id="program name"
            value={q2data.programme_name}
            name = "programme_name"
            onChange={handleInput}
           >
        <option className="dropdown-item" value="btech">B.tech</option>
        <option className="dropdown-item" value="civil">civil</option>
        <option className="dropdown-item" value="pharma">pharma</option>
      </select>

           <h5>Subject name</h5>
           <select className="btn started_button dropdown-toggle col-6" id="subject name"
           value={q2data.subject_name}
           name = "subject_name"
           onChange={handleInput}
           >
        <option className="dropdown-item" value="stats">Maths</option>
        <option className="dropdown-item" value="os">O.S</option>
        <option className="dropdown-item" value="Java">Java</option>
      </select>

           <h5>semester name</h5>
           <select className="btn started_button dropdown-toggle col-6" id="subject name"
            value={q2data.semestar}
            name = "semester"
            onChange={handleInput}
           >
        <option className="dropdown-item" name="opt" value="1">first</option>
        <option className="dropdown-item" name="opt" value="2">Second</option>
        <option className="dropdown-item" name="opt" value="3">third</option>
      </select>
           <div>
     
    </div>
          
            </div>
        <button type="submit" className="btn started_button">Submit</button>
        </form>
        </div>
        <div className="card search_notes_result_card m-2 col-lg-7 col-md-7 col-sm-12">
        <h2 className="alignCentre">Results</h2>
        
       {
          papers.map((items,key)=>{
                return( <>
                
                     <div className="p-3 result_search_notes material_card_list ">
                      
                      <div className="row">
                      <h5 className="m-2 col-3">{items.program}</h5>
                      <h5 className="m-2 col-3">{items.subject}</h5>
                      <h5 className="m-2 col-3">sem  -{items.semester}</h5>
                      <Link className="col-4 drive_link alignRight" to={items.link}>Drive Link .  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
</svg></Link>

                      </div>
                     
                      <h7 className="m-3">{items.description}</h7>
                     </div>
                     
                </>)
          })
       } 
        </div>
      </div>
  </>
  )
}
