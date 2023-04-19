import {Router} from 'express';
import studentsModel from '../models/students.js';

const router = Router();

router.get('/',(req,res)=>{
    res.render('index',{})
})
router.get('/students',async (req,res)=>{
    let page = parseInt(req.query.page);
    if(!page) page=1;
    //Lean es crucial para mostrar en Handlebars, ya que evita la "hidratación" del documento de mongoose,
    //esto hace que a Handlebars llegue el documento como plain object y no como Document.
    let result = await studentsModel.paginate({},{page,limit:5,lean:true})
    result.prevLink = result.hasPrevPage?`http://localhost:9090/students?page=${result.prevPage}`:'';
    result.nextLink = result.hasNextPage?`http://localhost:9090/students?page=${result.nextPage}`:'';
    result.isValid= !(page<=0||page>result.totalPages)
    res.render('students',result)
})


export default router;