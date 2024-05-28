<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
        {
            // Ambil user saat ini dari permintaan
            $user = $request->user();

            // Mengisi model User dengan data yang diterima dari permintaan
            $user->fill($request->validated());

            // Periksa apakah email diubah
            if ($user->isDirty('email')) {
                // Reset email_verified_at jika email diubah
                $user->email_verified_at = null;
            }

            // Set nilai whatsappNumber dengan data yang diterima dari permintaan
            $user->whatsappNumber = $request->input('whatsappNumber');

            // Simpan perubahan ke dalam database
            $user->save();

            // Redirect pengguna ke halaman edit profil
            return Redirect::route('profile.edit')->with('status', 'Profile updated.');
        }


    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
