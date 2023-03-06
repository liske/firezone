defmodule FzHttp.Users.User.Changeset do
  use FzHttp, :changeset
  alias FzHttp.Users

  @min_password_length 12
  @max_password_length 64

  def create_changeset(role, attrs) when is_atom(role) do
    %Users.User{}
    |> cast(attrs, ~w[
      email
      password
      password_confirmation
    ]a)
    |> put_change(:role, role)
    |> change_email_changeset()
    |> validate_if_changed(:password, &change_password_changeset/1)
  end

  def update_user_password(user, attrs) do
    user
    |> cast(attrs, [:password])
    |> validate_if_changed(:password, &change_password_changeset/1)
  end

  def update_user_email(user, attrs) do
    user
    |> cast(attrs, [:email])
    |> validate_if_changed(:email, &change_email_changeset/1)
  end

  def update_user_role(user, attrs) do
    user
    |> cast(attrs, [:role])
    |> validate_required([:role])
  end

  defp change_email_changeset(%Ecto.Changeset{} = changeset) do
    changeset
    |> trim_change(:email)
    |> validate_required([:email, :role])
    |> validate_email(:email)
    |> unique_constraint(:email)
  end

  defp change_password_changeset(%Ecto.Changeset{} = changeset) do
    changeset
    |> validate_required([:password])
    |> validate_confirmation(:password, required: true)
    |> validate_length(:password, min: @min_password_length, max: @max_password_length)
    |> put_hash(:password, to: :password_hash)
    |> redact_field(:password)
    |> redact_field(:password_confirmation)
    |> validate_required([:password_hash])
  end

  def generate_sign_in_token(%Users.User{} = user) do
    user
    |> change()
    |> put_change(:sign_in_token, FzHttp.Crypto.rand_string())
    |> put_hash(:sign_in_token, to: :sign_in_token_hash)
    |> put_change(:sign_in_token_created_at, DateTime.utc_now())
  end

  def update_last_signed_in(user, attrs) do
    cast(user, attrs, [:last_signed_in_method, :last_signed_in_at])
  end
end
