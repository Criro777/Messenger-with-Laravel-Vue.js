<?php

namespace App\Http\Controllers;

use App\User;

class ContactsController extends Controller
{
    public function index()
    {
        $contacts = User::where('id', '!=', auth()->id())->get();

        return response()->json($contacts);
    }
}
