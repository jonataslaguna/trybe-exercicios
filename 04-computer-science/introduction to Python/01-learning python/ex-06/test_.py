from listNumbers import listNumbersFizzBuzz
from validate_email import validate_email


def test_is_returns_the_correct_values():
    'Deve retornar os os valores corretos de acordo com o parametro'
    assert listNumbersFizzBuzz(3) == [1, 2, 'Fizz']
    
    
def test_username_can_only_contain_letters():
    assert validate_email("aaaa@nomewebsite.ext") is None