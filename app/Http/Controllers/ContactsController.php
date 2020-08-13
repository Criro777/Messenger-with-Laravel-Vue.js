<?php

namespace App\Http\Controllers;

use App\User;

class ContactsController extends Controller
{
    public function index()
    {
        $contacts = User::all();

        return response()->json($contacts);
    }
}
