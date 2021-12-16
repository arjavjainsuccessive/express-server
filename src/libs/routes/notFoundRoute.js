export const notFound = (req,res)=>{
    res.status(404).json({ status:404,
    error: 'NOT FOUND',
    message: 'Invalid routes'
    });
}
