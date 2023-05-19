import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCampusAsync, selectCampuses } from './CampusSlice';
import AddCampus from './AddCampus';
import { v4 as uuidv4 } from 'uuid';
import SingleCampusPreview from './SingleCampusPreview';
import { deleteCampusAsync } from './SingleCampusSlice';

const Campus = () => {
    const dispatch = useDispatch();
    const campuses = useSelector(selectCampuses);
    const [deleted, setDeleted] = useState(false);
    const [sorted, setSorted] = useState(false);
    const [arrCopy, setArrCopy] = useState([]); 
    
    useEffect(() => {
        dispatch(fetchCampusAsync());
        setDeleted(false);
    }, [dispatch, deleted, arrCopy]);

    const handleDelete = async(id) => {
        await dispatch(deleteCampusAsync(id));
        setDeleted(true);
    }

    function sortHelper(sorter) {
        setSorted(true);
        const campusCopy = [...campuses];
        if (sorter === "N") {
            campusCopy.sort((a, b) => a.name.localeCompare(b.name));
            setArrCopy(campusCopy);
        } else if (sorter === "S") {
            campusCopy.sort((a, b) => b.Students.length - a.Students.length);
            setArrCopy(campusCopy);
        } else if (sorter === "NS") {
            let newCopy = campusCopy.filter((campus) => campus.Students.length===0);
            setArrCopy(newCopy);
        }
    }
    
    return (
        <div className='center'>
            <div className='sortBar'>
                <h3>Sort</h3>
                <button onClick={() => sortHelper("N")}>Sort by name</button>
                <button onClick={() => sortHelper("S")}>Sort by number of students</button>
                <button onClick={() => sortHelper("NS")}>Filter only campuses with no students</button>
            </div>                
            {campuses==="pending"?<p>Loading campuses now...</p>:
                <div className="column">
                    {sorted? arrCopy.map(campus => <SingleCampusPreview key={uuidv4()} campus={campus} handleDelete={handleDelete}/>):
                    campuses.map(campus => <SingleCampusPreview key={uuidv4()} campus={campus} handleDelete={handleDelete}/>)}
                </div>
            }
            <AddCampus />
        </div>
    )
}

export default Campus;