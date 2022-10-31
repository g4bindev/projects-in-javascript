Este algoritmo valida números de telefone e retorna true se seguirem os padrões norte americano:

1 (555) 555-5555
1 555-555-5555
1 555 555 5555
(555) 555-5555
5555555555

Exemplo:

1. "1 473)859-2855" retorna false, porquê falta o "("
2. "2 (757) 622-7382" retorna false, porquê se o DDD estiver presente ele precisa começar com "1"
3. "555-555-5555" retorna true.
4. "(555)555-5555" retorna true.
5. "1 555-555-5555" retorna true.