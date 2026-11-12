import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

/*
Should validate form fields

1. insert user into data base by calling Java thing
2. password should have hashing and stuff
3. create a session that is stored in cookie or database or something
*/
export async function signup(formData : FormData){

    // const email = formData.get('email');
    // const password = formData.get('password');
}

export async function login(formData : FormData){
    //supabase automatically does the signing in

    //

    // const email = formData.get('email');
    // const password = formData.get('password');

    // //makes sure they are string
    // if (typeof email !== 'string' || typeof password !== 'string') {
    //     throw new Error('Email and password are required');
    //     }

    // const { data, error } = await supabase.auth.signInWithPassword({
    //     email,
    //     password,
    // });
    // if (error) {
    //     throw new Error(error.message);
    // }

    //

    // data.session.access_token is the JWT to send to .NET
    //return data.session?.access_token;
    //JWT: JSON Web Token
}