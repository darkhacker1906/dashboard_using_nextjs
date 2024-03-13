export async function GET(req,res,next){
    let users=[
        {
            id:1,
            name:"Abhi",
            email:"singhabhinandan634@gmail.com",
        },
        {
            id:2,
            name:"Abhinandan",
            email:"abhinandan1906singh@gmail.com",
        },
    ]

    let data=JSON.stringify(users);
    return new Response(data,{status:200});
}