using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Command
{
    public interface Commandable
    {
        void Execute();
    }

    public interface Commandable<T>
    {
        void Execute(Robot context, T options);
    }
}
