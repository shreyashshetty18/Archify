interface AuthState {
    userId: string | null;
    userName: string | null;
    isSignedIn: boolean;
}

type AuthContext = {
    userId: string | null;
    userName: string | null;
    isSignedIn: boolean;
    refreshAuth: () => Promise<boolean>;
    signIn: () => Promise<boolean>;
    signOut: () => Promise<boolean>;

}